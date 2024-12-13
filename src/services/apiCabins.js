import { supabase, supabaseUrl } from "./supabase";

// 獲取所有房間資料
export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("無法載入房間資料");
  }

  return data;
}

// 創建或編輯房間
export async function createEditCabin(newCabin, id) {
  // 檢查圖片路徑是否已存在
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  // 生成圖片名稱
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. 創建或編輯房間
  let query = supabase.from("cabins");

  // A) 創建
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // B) 編輯
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("無法創建或編輯房間");
  }

  // 2. 上傳圖片
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // 3. 如果上傳圖片失敗，刪除房間
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error("無法上傳圖片，房間未創建");
  }

  return data;
}

// 刪除房間
export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("無法刪除房間");
  }

  return data;
}

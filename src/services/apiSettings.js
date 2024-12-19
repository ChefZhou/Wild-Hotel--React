import { supabase } from "./supabase";

export async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*").single();

  if (error) {
    console.error(error);
    throw new Error("無法載入設定");
  }
  return data;
}

export async function updateSetting(newSetting) {
  const { data, error } = await supabase
    .from("settings")
    .update(newSetting)

    .eq("id", 1)
    .single();

  if (error) {
    console.error(error);
    throw new Error("設定更新失敗");
  }
  return data;
}

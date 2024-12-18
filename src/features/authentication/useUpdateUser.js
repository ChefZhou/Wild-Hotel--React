import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user); // 修正查詢鍵
      toast.success("用戶資料更新成功！");
    },
    onError: (err) => {
      console.error("Error:", err);
      toast.error("更新失敗，請再試一次");
    },
  });

  return { updateUser, isUpdating };
}

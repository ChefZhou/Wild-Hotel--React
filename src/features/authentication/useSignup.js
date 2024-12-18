import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: ({ fullName, email, password }) =>
      signupApi({ fullName, email, password }),
    onSuccess: () => {
      toast.success("註冊成功！");
    },
    onError: (err) => {
      toast.error("註冊失敗，請再試一次");
    },
  });

  return { signup, isLoading }; // 返回一個對象
}

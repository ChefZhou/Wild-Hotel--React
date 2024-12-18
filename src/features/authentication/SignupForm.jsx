import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";

function SignupForm() {
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: () => {
          reset();
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="名稱" error={errors.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isLoading}
          {...register("fullName", { required: "請輸入名稱" })}
          autoComplete="name"
        />
      </FormRow>

      <FormRow label="電子信箱" error={errors.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "請輸入電子信箱",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "請輸入有效的電子信箱",
            },
          })}
          autoComplete="email"
        />
      </FormRow>

      <FormRow label="密碼(最少4碼)" error={errors.password?.message}>
        <Input
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: "請再次輸入密碼",
            minLength: { value: 4, message: "密碼至少4碼" },
          })}
          autoComplete="new-password"
        />
      </FormRow>

      <FormRow label="密碼確認" error={errors.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: "請再次輸入密碼",
            validate: (value) =>
              value === getValues().password || "請與上方密碼一樣",
          })}
          autoComplete="new-password"
        />
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset" disabled={isLoading}>
          重置
        </Button>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "註冊中..." : "創立新用戶"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;

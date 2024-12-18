import { useForm } from "react-hook-form";
import { useUpdateUser } from "./useUpdateUser";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useUser } from "./useUser";

function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { updateUser, isUpdating } = useUpdateUser();
  const { user } = useUser();

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: reset });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        id="username"
        value={user.email}
        autoComplete="username"
        style={{ display: "none" }}
        readOnly
      />

      <FormRow label="新密碼(最少6個字元)" error={errors?.password?.message}>
        <Input
          type="password"
          id="password"
          autoComplete="new-password"
          disabled={isUpdating}
          {...register("password", {
            required: "這裡是必填欄位",
            minLength: {
              value: 6,
              message: "密碼至少要有6個字元",
            },
          })}
        />
      </FormRow>

      <FormRow label="確認新密碼" error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          autoComplete="new-password"
          disabled={isUpdating}
          {...register("passwordConfirm", {
            required: "這裡是必填欄位",
            validate: (value) => value === getValues().password || "密碼不匹配",
          })}
        />
      </FormRow>

      <FormRow>
        <Button type="submit" disabled={isUpdating}>
          {isUpdating ? "更新中..." : "更新密碼"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default UpdatePasswordForm;

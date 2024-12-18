import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Account() {
  return (
    <>
      <Heading as="h1">更改個人資料</Heading>

      <Row>
        <Heading as="h3">更新你的資料</Heading>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading as="h3">更改密碼</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}

export default Account;

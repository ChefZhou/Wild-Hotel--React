import Heading from "../ui/Heading";
import SignupForm from "../features/authentication/SignupForm";

function NewUsers() {
  return (
    <>
      <Heading as="h1">創建新用戶</Heading>
      <SignupForm />;
    </>
  );
}

export default NewUsers;

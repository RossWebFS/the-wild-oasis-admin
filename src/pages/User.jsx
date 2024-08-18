import SignupForm from "../features/authentication/SignUpForm";
import Heading from "../ui/Heading";

const User = () => {
  return (
    <>
      <Heading as="h1">Create a new user</Heading>
      <SignupForm />
    </>
  );
};

export default User;

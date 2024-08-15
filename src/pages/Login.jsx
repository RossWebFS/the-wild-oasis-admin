import styled from "styled-components";

import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import LoginForm from "../features/authentication/LoginForm";

const Login = () => {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4">Log in to tour account</Heading>
      <LoginForm />
    </LoginLayout>
  );
};

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

export default Login;

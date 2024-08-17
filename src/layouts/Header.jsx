import styled from "styled-components";

import HeaderMenu from "../ui/HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";

const Header = () => {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem;
`;

export default Header;

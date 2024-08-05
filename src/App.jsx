import styled from "styled-components";

import GlobalStyles from "./styles/GlobalStyles";

const StyledApp = styled.div`
  padding: 20px;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <StyledApp />
    </>
  );
};

export default App;

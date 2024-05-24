import styled from "styled-components";

function Header() {
  return <StyledHeader>HEADER</StyledHeader>;
}

const StyledHeader = styled.header`
  padding: 3.8rem 2.4rem;
  background-color: var(--color-grey-0);
`;

export default Header;

import styled from "styled-components";

import Menu from "./Menu";
import Navbar from "./Navbar";
import { useCallback, useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = useCallback(() => {
    console.log(menuOpen);

    setMenuOpen((previous) => !previous);
  }, [menuOpen]);

  return (
    <Container>
      <Icon onClick={handleToggleMenu}>
        <Menu />
      </Icon>
      <h1>Header</h1>
      <Navbar show={menuOpen} />
    </Container>
  );
};

const Container = styled.header`
  background: var(--black);
  position: relative;
  color: white;
  padding: 20px;
  display: flex;
  > svg {
    margin-right: 20px;
  }
  > * {
    margin: 0;
  }
  h1 {
    font-size: 1rem;
  }
`;

const Icon = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin-right: 1rem;
`;

export default Header;

import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

const Navbar = ({ show }) => {
  const navItems = [
    { id: 1, name: "asd" },
    { id: 2, name: "dsa" },
    { id: 3, name: "sda" },
    { id: 4, name: "dfhd" },
    { id: 5, name: "adfgfsd" },
    { id: 6, name: "as343dd" },
  ];

  return (
    <AnimatePresence>
      {show && (
        <Container
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <NavItems>
            {navItems.map(({ id, name }, key) => {
              return (
                <NavItem id={id} initial={{ x: -100 }} animate={{ x: 0 }} transition={{ delay: key * 0.02 }}>
                  {name}
                </NavItem>
              );
            })}
          </NavItems>
        </Container>
      )}
    </AnimatePresence>
  );
};

const Container = styled(motion.nav)`
  position: absolute;
  background: var(--black2);
  width: 350px;
  height: 650px;
  top: 58px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 10px 10px 0;
`;

const NavItems = styled.ul`
  margin: 0;
  padding: 0;
`;

const NavItem = styled(motion.li)`
  padding: 1rem;
  list-style: none;
  font-size: 2rem;
`;

export default Navbar;

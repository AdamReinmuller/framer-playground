import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";

import { Card, CardGrid, Container, Header } from "./Elements";
import "./App.css";
import Menu from "./Menu";
import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";

function App() {
  const [value, setValue] = useState(0);
  const [toggle, setToggle] = useState(true);
  const handleVolumeChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: Number(toggle) }}>
      <Header>
        <Menu />
        <h1>Header</h1>
      </Header>
      <Container>
        <motion.h2 animate={{ x: Number(value) }}>Super Cool</motion.h2>
        <input type="range" min="-100" max="100" value={value} onChange={handleVolumeChange} />
        <button onClick={() => setToggle((prevValue) => !prevValue)}>Toggle</button>
        <CardGrid>
          <Card style={{ background: "var(--purp)" }}>
            <h3>Some card</h3>
            <img src={purp} />
          </Card>
          <Card style={{ background: "var(--blue)" }}>
            <h3>Some card</h3>
            <img src={blue} />
          </Card>
          <Card style={{ background: "var(--black)" }}>
            <h3>Some card</h3>
            <img src={black} />
          </Card>
          <Card style={{ background: "var(--green)" }}>
            <h3>Some card</h3>
            <img src={green} />
          </Card>
        </CardGrid>
      </Container>
    </motion.div>
  );
}

export default App;

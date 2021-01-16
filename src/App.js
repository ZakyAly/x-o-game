import React from "react";
import Particles from "react-particles-js";
import Logo from "./Components/Logo/Logo";
import Game from "./Components/Game/Game";
import "./App.css";

const particlesOptions = {
  particles: {
    number: {
      value: 8,
      density: {
        enable: true,
        value_area: 500,
      },
    },
  },
};
function App() {
  return (
    <div className="App">
      <Logo />

      <Particles className="particles" params={particlesOptions} />
      <Game />
    </div>
  );
}

export default App;

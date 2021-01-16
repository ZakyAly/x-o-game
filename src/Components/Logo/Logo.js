import React from "react";
import Tilt from "react-tilt";
import joystick from "./joystick.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0 ">
      <Tilt
        className="Tilt br2 shadow-5 "
        options={{ max: 100 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner pa3">
          <img
            className="App-logo"
            style={{ paddingTop: "5px" }}
            alt="logo"
            src={joystick}
          />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;

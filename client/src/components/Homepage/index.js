import React from "react";
import "./style.css";

function Hero(props) {
  return (
    <div>
    <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      </div>
    <div className="logo text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
    </div>
  );
}

export default Hero;
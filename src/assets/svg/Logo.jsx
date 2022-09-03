import * as React from "react";
import IKPLogo from "../img/IKPLogo.png";

function SvgComponent(props) {
  return (
    <img
      alt="IKP-logo"
      width={40}
      height={40}
      src={IKPLogo}
      style={{ borderRadius: "20%" }}
    />
  );
}

export default SvgComponent;

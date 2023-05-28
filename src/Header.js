import logo from "./assets/desktop/logo.svg";
import sun from "./assets/desktop/icon-sun.svg";
import moon from "./assets/desktop/icon-moon.svg";
import { useState } from "react";

const Header = () => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  };
  return (
    <>
      <header className="App-header">
        <img className="logo" src={logo}></img>
        <div className="color-theme-div">
          <img src={sun}></img>
          <label className="toggle-switch">
            <input type="checkbox" checked={checked} onChange={handleToggle} />
            <span className="slider"></span>
          </label>
          <img src={moon}></img>
        </div>
      </header>
    </>
  );
};

export default Header;

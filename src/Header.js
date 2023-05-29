import logo from "./assets/desktop/logo.svg";
import sun from "./assets/desktop/icon-sun.svg";
import moon from "./assets/desktop/icon-moon.svg";
import { useState } from "react";
import Search from "./Search";

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
          <img className="sun-log" src={sun}></img>

          <img src={moon}></img>
        </div>
      </header>
      <Search />
    </>
  );
};

export default Header;

import logo from "./assets/desktop/logo.svg";
import sun from "./assets/desktop/icon-sun.svg";
import moon from "./assets/desktop/icon-moon.svg";
import { useState } from "react";
import Search from "./Components/Search";

const Header = ({
  search,
  setSearch,
  location,
  setLocation,
  isOpen,
  setIsOpen,
  closeModal,
  openModal,
  handleCheckBoxItems,
  filterList,
  filterByLocation,
  setFilterByLocation,
}) => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  };
  return (
    <>
      <header className="App-header">
        <img className="logo" src={logo}></img>
        <div className="color-theme-div">
          <img className="sun-logo" src={sun}></img>

          <img className="moon-logo" src={moon}></img>
        </div>
      </header>
      <Search
        search={search}
        setSearch={setSearch}
        location={location}
        setLocation={setLocation}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        closeModal={closeModal}
        openModal={openModal}
        handleCheckBoxItems={handleCheckBoxItems}
        filterList={filterList}
        filterByLocation={filterByLocation}
        setFilterByLocation={setFilterByLocation}
      />
    </>
  );
};

export default Header;

import Header from "./Header";
import Main from "./Main";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [filterByLocation, setFilterByLocation] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    document.querySelector("main").style.display = "flex";
  };

  const openModal = () => {
    setIsOpen(true);
    document.querySelector("main").style.display = "none";
  };

  const filterList = [];

  const handleCheckBoxItems = (item) => {
    filterList.push(item);
    console.log(filterList);
    setSearch(item);
  };

  return (
    <div className="App">
      <Header
        search={search}
        setSearch={setSearch}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        closeModal={closeModal}
        openModal={openModal}
        filterList={filterList}
        handleCheckBoxItems={handleCheckBoxItems}
        filterByLocation={filterByLocation}
        setFilterByLocation={setFilterByLocation}
      />
      <Main
        search={search}
        filterList={filterList}
        handleCheckBoxItems={handleCheckBoxItems}
        filterByLocation={filterByLocation}
      />
    </div>
  );
}

export default App;

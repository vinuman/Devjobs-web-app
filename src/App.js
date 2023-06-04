import Header from "./Header";
import Main from "./Main";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    document.querySelector("main").style.display = "";
  };

  const openModal = () => {
    setIsOpen(true);
    document.querySelector("main").style.display = "none";
  };

  console.log(search);
  return (
    <div className="App">
      <Header
        search={search}
        setSearch={setSearch}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        closeModal={closeModal}
        openModal={openModal}
      />
      <Main search={search} />
    </div>
  );
}

export default App;

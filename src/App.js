import Header from "./Header";
import Main from "./Main";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div className="App">
      <Header search={search} setSearch={setSearch} />
      <Main search={search} />
    </div>
  );
}

export default App;

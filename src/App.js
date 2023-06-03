import Header from "./Header";
import Main from "./Main";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [searchBtn, setSearchBtn] = useState(false);
  console.log(search);
  return (
    <div className="App">
      <Header
        location={location}
        setLocation={setLocation}
        search={search}
        setSearch={setSearch}
        searchBtn={searchBtn}
        setSearchBtn={setSearchBtn}
      />
      <Main search={search} searchBtn={searchBtn} location={location} />
    </div>
  );
}

export default App;

import searchBar from "../assets/desktop/icon-search.svg";
import locationIcon from "../assets/desktop/icon-location.svg";

const Search = ({
  search,
  setSearch,
  location,
  setLocation,
  searchBtn,
  setSearchBtn,
}) => {
  const handleFilterInput = (e) => {
    setLocation(e.target.value);
    setSearchBtn(false);
  };
  console.log(location);
  return (
    <>
      <nav>
        <div className="search-field1">
          <img className="search-icon" src={searchBar}></img>
          <label htmlFor="search">Search</label>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Filter by title, companies, expertise…"
          ></input>
        </div>
        <div className="search-field2">
          <img className="location-icon" src={locationIcon}></img>
          <label htmlFor="search">Search by full time</label>
          <input
            onChange={handleFilterInput}
            type="text"
            placeholder="Filter by location…"
          ></input>
        </div>
        <div className="check-item">
          <label htmlFor="search">full time only</label>
          <input type="checkbox" />
          <p>Full Time only</p>
          <button onClick={() => setSearchBtn(true)} className="btn">
            Search
          </button>
        </div>
      </nav>
    </>
  );
};

export default Search;

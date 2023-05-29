import searchBar from "./assets/desktop/icon-search.svg";
import location from "./assets/desktop/icon-location.svg";

const Search = () => {
  return (
    <>
      <nav>
        <div className="search-field1">
          <img className="search-icon" src={searchBar}></img>
          <label htmlFor="search">Search</label>
          <input
            type="text"
            placeholder="Filter by title, companies, expertise…"
          ></input>
        </div>
        <div className="search-field2">
          <img className="location-icon" src={location}></img>
          <label htmlFor="search">Search by full time</label>
          <input type="text" placeholder="Filter by location…"></input>
        </div>
        <div className="check-item">
          <label htmlFor="search">full time only</label>
          <input type="checkbox" />
          <p>Full Time only</p>
          <button className="btn">Search</button>
        </div>
      </nav>
    </>
  );
};

export default Search;

import searchBar from "../assets/desktop/icon-search.svg";
import locationIcon from "../assets/desktop/icon-location.svg";
import Modal from "./Modal";

const Search = ({
  search,
  setSearch,
  isOpen,
  setIsOpen,
  closeModal,
  openModal,
}) => {
  return (
    <>
      <nav>
        <div className="search-field1">
          <img className="search-icon" src={searchBar}></img>
          <label htmlFor="search">Search</label>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search by title, companies, expertise…"
          ></input>
        </div>
        <div onClick={() => openModal()} className="search-field2">
          <img className="location-icon" src={locationIcon}></img>
          <label htmlFor="search">Search by full time</label>
          <input
            onClick={() => openModal()}
            type="text"
            placeholder="Filter by location…"
          ></input>
        </div>
        <div className="check-item">
          <label htmlFor="search">full time only</label>
          <input type="checkbox" />
          <p>Full Time only</p>
          <button className="btn">Search</button>
        </div>
      </nav>
      <Modal
        isOpen={isOpen}
        setIsOpen={isOpen}
        closeModal={closeModal}
        openModal={openModal}
      />
    </>
  );
};

export default Search;

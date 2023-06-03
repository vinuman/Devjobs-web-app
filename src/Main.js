import data from "./data.json";
import { useState } from "react";
import PageContent from "./Pagecontent";

const Main = ({ search, searchBtn, location }) => {
  const [visibleItems, setVisibleItems] = useState(12);
  const totalItems = data.length;

  const [selectedItem, setSelectedItem] = useState(null);

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const handleLoadMore = () => {
    setVisibleItems(totalItems);
  };

  if (selectedItem) {
    return <PageContent selectedItem={selectedItem} />;
  }
  if (searchBtn && location !== "") {
    return (
      <div>
        <div></div>
      </div>
    );
  }

  return (
    <main>
      {data
        .filter((item) => {
          return search.toLowerCase() === ""
            ? item
            : item.position.toLowerCase().includes(search) ||
                item.company.toLowerCase().includes(search) ||
                item.location.toLowerCase().includes(search) ||
                item.contract.toLowerCase().includes(search);
        })
        .slice(0, visibleItems)
        .map((item) => (
          <div
            key={item.id}
            className="card"
            onClick={() => handleCardClick(item)}
          >
            <div
              style={{ backgroundColor: item.logoBackground }}
              className="logo-container"
            >
              <img src={item.logo} alt={item.company}></img>
            </div>

            <div className="time">
              <p>{item.postedAt}</p>
              <p>{item.contract}</p>
            </div>
            <h1>{item.position}</h1>
            <p>{item.company}</p>
            <h2>{item.location}</h2>
          </div>
        ))}
      <button
        onClick={handleLoadMore}
        className="btn"
        /* style={{ margin: "0 auto" }} */
      >
        Load More
      </button>
    </main>
  );
};

export default Main;

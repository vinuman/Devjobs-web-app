import data from "./data.json";
import { useState } from "react";

const Main = () => {
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
    return (
      <main className="card-page">
        <div className="card-page-header">
          <div
            style={{ backgroundColor: selectedItem.logoBackground }}
            className="page-logo-container"
          >
            <img src={selectedItem.logo} alt={selectedItem.company}></img>
          </div>
          <div className="company-name">
            <h1>{selectedItem.company}</h1>
            <p>{selectedItem.website}</p>
          </div>
          <button className="btn">Company Site</button>
        </div>
        <div className="card-page-content"></div>
      </main>
    );
  }
  return (
    <main>
      {data.slice(0, visibleItems).map((item) => (
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
        style={{ margin: "0 auto" }}
      >
        Load More
      </button>
    </main>
  );
};

export default Main;

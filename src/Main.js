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
        <div className="card-page-content">
          <div className="card-page-content-header">
            <div className="left">
              <div className="time">
                <p>{selectedItem.postedAt}</p>
                <p>{selectedItem.contract}</p>
              </div>
              <h1>{selectedItem.position}</h1>
              <p>{selectedItem.company}</p>
              <h2>{selectedItem.location}</h2>
            </div>
            <div className="right">
              <button className="btn">Apply Now</button>
            </div>
          </div>
          <p className="description">{selectedItem.description}</p>
          <h1 className="heading">Requirements</h1>
          <p className="requirements">{selectedItem.requirements.content}</p>
          {selectedItem.requirements.items.map((item, index) => (
            <li className="req-items" key={index}>
              {item}
            </li>
          ))}
          <h1 className="heading">What you will do</h1>
          <p className="requirements">{selectedItem.role.content}</p>
          {selectedItem.role.items.map((item, index) => (
            <li className="req-items" key={index}>
              {item}
            </li>
          ))}
        </div>
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

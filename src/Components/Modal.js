import React from "react";
import data from "../data.json";

const Modal = ({ isOpen, setIsOpen, closeModal }) => {
  console.log(isOpen);

  const existingLocations = [];
  const uniqueLocation = data.filter((item) => {
    if (!existingLocations.includes(item.location)) {
      existingLocations.push(item.location);
    }
  });
  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h1>Select Locations</h1>
            {existingLocations.map((item, index) => (
              <div key={index} className="check-item-locations">
                <input type="checkbox" />
                <p>{item}</p>
              </div>
            ))}
            <button className="btn btn-filter">Filter</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

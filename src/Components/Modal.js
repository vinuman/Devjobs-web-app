import React from "react";
import data from "../data.json";
import { useState } from "react";

const Modal = ({ isOpen, setIsOpen, closeModal }) => {
  console.log(isOpen);

  const existingLocations = [];
  const uniqueLocation = data.filter((item) => {
    if (!existingLocations.includes(item.location)) {
      existingLocations.push(item.location);
    }
  });

  const filterList = [];

  const handleCheckBoxItems = (item) => {
    filterList.push(item);
  };
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
                <input
                  onChange={() => handleCheckBoxItems(item)}
                  type="checkbox"
                />
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

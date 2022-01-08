import React from "react";

const TimeInterval = ({ optionsList, onClick }) => {
  function handleOnClick(option) {
    onClick(option);
  }

  return (
    <div className="interval__wrapper">
      <div className="interval__buttons">
        {optionsList.map((option, index) => (
          <div className="interval__button-wrapper" key={index}>
            <button
              type="button"
              className="interval__button"
              onClick={() => handleOnClick(option)}
            >
              <span>{option}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeInterval;

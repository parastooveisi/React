import React from "react";

const BirthdayReminder = ({ img }) => {
  return (
    <div>
      <div className="ui list">
        <div className="item">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BirthdayReminder;

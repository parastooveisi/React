import React, { useState } from "react";
import ReactDOM from "react-dom";
import BirthdayReminder from "./BirthdayReminder";
import data from "./data";
import "./index.css";

const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <div className="wrapper">
      <BirthdayReminder people={people} />
      <button className="btn" onClick={() => setPeople([])}>
        Clear All
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

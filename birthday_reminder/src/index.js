import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import BirthdayReminder from "./BirthdayReminder";

const App = () => {
  return <BirthdayReminder img={faker.image.avatar()} />;
};

ReactDOM.render(<App />, document.getElementById("root"));

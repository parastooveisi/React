import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import BirthdayReminder from "./BirthdayReminder";

const App = () => {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <BirthdayReminder
        img={faker.image.image()}
        fName={faker.name.firstName()}
        lName={faker.name.lastName()}
      />
      <BirthdayReminder
        img={faker.image.image()}
        fName={faker.name.firstName()}
        lName={faker.name.lastName()}
      />
      <BirthdayReminder
        img={faker.image.image()}
        fName={faker.name.firstName()}
        lName={faker.name.lastName()}
      />
      <BirthdayReminder
        img={faker.image.image()}
        fName={faker.name.firstName()}
        lName={faker.name.lastName()}
      />
      <BirthdayReminder
        img={faker.image.image()}
        fName={faker.name.firstName()}
        lName={faker.name.lastName()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

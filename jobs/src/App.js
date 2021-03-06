import React, { useState } from "react";
import Jobs from "./Jobs";
import faker from "faker";

const App = () => {
  console.log(faker.internet.email());
  return (
    <div>
      <Jobs />
    </div>
  );
};

export default App;

import React, { useState } from "react";
import Jobs from "./Jobs";
import faker from "faker";

const App = () => {
  const generator = (schema, min = 1, max) => {
    max = max || min;
    return Array.from({ length: faker.random.number({ min, max }) }).map(() =>
      Object.keys(schema).reduce((entity, key) => {
        entity[key] = faker.fake(schema[key]);
        return entity;
      }, {})
    );
  };

  // your schema
  const clientsSchema = {
    id: "{{random.number}}",
    prductName: "{{commerce.productName}}",
    description: "{{commerce.productDescription}}",
    price: "{{commerce.price}}",
    image: "{{image.business}}",
  };

  // generate random clients between 5 and 20 units, based on client schema defined above
  const data = generator(clientsSchema, 5, 20);

  console.log(data);
  return (
    <div>
      <Jobs data={data} />
    </div>
  );
};

export default App;

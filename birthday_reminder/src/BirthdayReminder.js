import React, { Text } from "react";

const BirthdayReminder = ({ people }) => {
  const renderedPeople = people.map((person) => {
    const { id, name, age, image } = person;
    return (
      <article className="person" key={id}>
        <img className="avatar" src={image} alt="" />
        <div>
          <h4>{name}</h4>
          <p>{age} Years old</p>
        </div>
      </article>
    );
  });
  return <div className="baseDiv">{renderedPeople}</div>;
};

export default BirthdayReminder;

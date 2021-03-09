import React from "react";
import Job from "./Job";

const Jobs = ({ data, removeItem }) => {
  const renderedData = data.map((job) => {
    return (
      <div>
        <Job key={job.id} {...job} removeItem={removeItem} />
      </div>
    );
  });
  return (
    <section>
      <div className="main">
        <h2>Our Jobs</h2>
      </div>
      <div>{renderedData}</div>
    </section>
  );
};

export default Jobs;

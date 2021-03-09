import React from "react";
import Job from "./Job";

const Jobs = ({ data }) => {
  const renderedData = data.map((job) => {
    return <Job key={data.id} job={job} />;
  });
  return (
    <section>
      <div className="title">
        <h2>Our Jobs</h2>
      </div>
      <div>{renderedData}</div>
    </section>
  );
};

export default Jobs;

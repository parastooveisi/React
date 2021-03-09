import React, { useState } from "react";
import Jobs from "./Jobs";
import data from "./data";

const App = () => {
  const [jobs, setJobs] = useState(data);
  const removeItem = (id) => {
    let newJobs = jobs.filter((item) => item.id !== id);
    setJobs(newJobs);
  };
  return (
    <div className="main">
      <Jobs key={data.id} data={jobs} removeItem={removeItem} />
    </div>
  );
};

export default App;

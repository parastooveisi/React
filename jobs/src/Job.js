import React, { useState } from "react";

const Job = ({ id, jobTitle, description, salary, imge, removeItem }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-job">
      <img src={imge} alt="" />
      <footer>
        <div className="job-info">
          <h4>{jobTitle}</h4>
          <h4 className="salary">{salary}$</h4>
        </div>
        <p>
          {readMore ? description : `${description.substring(0, 250)}...`}
          <button
            className="txt-btn"
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {readMore ? "show less" : "show more"}
          </button>
        </p>
        <button className="remove-btn" onClick={() => removeItem(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Job;

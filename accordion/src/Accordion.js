import React, { useState } from "react";
import { Segment } from "semantic-ui-react";

const Accordion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  const handleClick = () => {
    setShowInfo(!showInfo);
  };
  return (
    <div className="ui raised segments">
      <Segment
        color="violet"
        size="big"
        className="ui padded container clearing segment"
      >
        <div className="ui list">
          <div className="item">
            <div className="right floated six wide column">
              <i
                onClick={() => handleClick()}
                className={
                  showInfo
                    ? "chevron circle up icon"
                    : "chevron circle down icon"
                }
              ></i>
            </div>
            <div className="header">{title}</div>
            {showInfo && <p>{info}</p>}
          </div>
        </div>
      </Segment>
    </div>
  );
};

export default Accordion;

import questions from "./data";
import Accordion from "./Accordion";
import { Segment } from "semantic-ui-react";

const App = () => {
  const info = questions.map((question) => {
    return <Accordion key={question.id} {...question} />;
  });
  return (
    <div className="main">
      <Segment color="purple" className="ui padded container segment">
        <div className="ui two column grid">
          <div className="column">
            <h2 className="ui header">
              Questions and answers about COVID-19 vaccine
            </h2>
          </div>
          <div className="column">{info}</div>
        </div>
      </Segment>
    </div>
  );
};

export default App;

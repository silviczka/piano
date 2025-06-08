import "./ScoreFeedback.css";

const ScoreFeedback = ({ feedback }) => {
  return (
    <div className={`feedback-text ${feedback ? "show-feedback" : ""}`}>
      {feedback}
    </div>
  );
};

export default ScoreFeedback;

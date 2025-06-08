import "./ScoreFeedback.css";

const ScoreFeedback = ({ feedback }) => {
  return (
    <div
      className={`feedback-text ${feedback ? "show-feedback" : ""}`}
      style={{ color: feedback }}
    >
      +1
    </div>
  );
};

export default ScoreFeedback;

import "./ScoreDetail.css";

const ScoreDetail = ({ score }) => {
  return (
    <div className="score-detail__wrapper">
      <div className="score-detail__name">Body:</div>
      <div className="score-detail__points">{score}</div>
    </div>
  );
};

export default ScoreDetail;

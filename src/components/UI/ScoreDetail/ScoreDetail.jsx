import "./ScoreDetail.css";
import { SCORE_PERFECT } from "../../../constants/constants";

const ScoreDetail = ({ score, notesNum }) => {
  return (
    <div className="score-detail__wrapper">
      <div className="score-detail__name">Body:</div>
      <div className="score-detail__points">
        {score} / {notesNum * SCORE_PERFECT}
      </div>
    </div>
  );
};

export default ScoreDetail;

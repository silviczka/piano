import "./SongDetail.css";
import formatDisplayedTime from "../../../utils/formatDisplayedTime";

const SongDetail = ({ name, time }) => {
  return (
    <div className="song-detail__wrapper">
      <div className="song-detail__name">{name}:</div>
      <div className="song-detail__time"> {formatDisplayedTime(time)}</div>
    </div>
  );
};

export default SongDetail;

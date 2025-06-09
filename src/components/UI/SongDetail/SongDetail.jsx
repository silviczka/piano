import "./SongDetail.css";
import formatDisplayedTime from "../../../utils/formatDisplayedTime";

const SongDetail = ({ name, time, gameMode }) => {
  return (
    <div className="song-detail__wrapper">
      {gameMode === "normal" ? (
        <>
          <div className="song-detail__name">{name}:</div>
          <div className="song-detail__time"> {formatDisplayedTime(time)}</div>
        </>
      ) : (
        <div className="song-detail__name">Tutoriál</div>
      )}
    </div>
  );
};

export default SongDetail;

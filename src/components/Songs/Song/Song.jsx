import "./Song.css";
import playIcon from "./img/play.svg";
import star1 from "./img/1star.webp";
import formatDisplayedTime from "../../../utils/formatDisplayedTime";

const Song = ({ name, totalTime, img, onSongSelect, tracks, onSongClick }) => {
  const handleSongSelect = () => {
    onSongClick();
    onSongSelect(name, tracks);
  };

  return (
    <div className="song" onClick={handleSongSelect}>
      <img className="song-star" src={star1} alt={star1} />
      <img className="song-img" src={`/img/songs/${img}`} alt={name} />
      <div className="song-footer">
        <div>{formatDisplayedTime(totalTime)}</div>
        <div className="song-footer__select">
          <div> {name}</div>
          <img src={playIcon} alt="play-icon" />
        </div>
      </div>
    </div>
  );
};

export default Song;

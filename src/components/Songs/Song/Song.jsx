import './Song.css';
import playIcon from './img/play.svg';
import formatDisplayedTime from '../../../utils/formatDisplayedTime';

const Song = ({
  name,
  totalTime,
  img,
  starImg,
  stars,
  onSongSelect,
  tracks,
  onSongClick,
}) => {
  const handleSongSelect = () => {
    onSongClick();
    onSongSelect(name, tracks);
  };

  return (
    <div className="song" onClick={handleSongSelect}>
      <img
        className="song-star"
        src={`/img/difficulty/${starImg}`}
        alt={stars}
      />
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

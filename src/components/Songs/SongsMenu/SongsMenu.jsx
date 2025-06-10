import './SongsMenu.css';
import Song from '../Song/Song';

const SongsMenu = ({
  songs,
  isMenuOpen,
  onSongSelect,
  handleOnBackBtnClick,
  onSongClick,
  isFirstSongSelected,
}) => {
  return (
    <div className={!isMenuOpen ? 'songs-menu__closed' : 'songs-menu__opened'}>
      <div className="songs">
        <div className="songs-header">
          {isFirstSongSelected && (
            <svg
              className="back-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              onClick={handleOnBackBtnClick}
            >
              <rect
                x="0"
                y="0"
                width="42"
                height="42"
                rx="5"
                fill="rgba(11, 159, 175, 1)"
              />
              <path
                d="M20 13L13 21L20 29"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M30 21H13"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          <div className="songs-title">Vyber si píšničku a začni hrát.</div>
        </div>

        {
          <div className="songs-wrapper">
            <div className="songs-item">
              {songs.map((song, index) => (
                <Song
                  key={index}
                  id={index}
                  name={song.header.title}
                  totalTime={
                    song.tracks[0].events[song.tracks[0].events.length - 1].time
                  }
                  img={song.header.img}
                  starImg={song.header.starImg}
                  stars={song.header.stars}
                  onSongClick={onSongClick}
                  onSongSelect={onSongSelect}
                  tracks={song.tracks[0].events}
                />
              ))}
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default SongsMenu;

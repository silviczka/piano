import songsIcon from "./img/songs.svg";
import SongsMenu from "../../../../Songs/SongsMenu/SongsMenu";
import { useState } from "react";

const SongsBtn = ({ songs, onSongSelect, onSongsMenuClick, disabled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    onSongsMenuClick();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOnBackBtnClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSelectMelody = (id, name) => {
    onSongSelect(id, name);
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <img
        src={songsIcon}
        alt="songs-icon"
        onClick={disabled ? undefined : toggleDropdown}
      />
      <SongsMenu
        songs={songs}
        isMenuOpen={isMenuOpen}
        onSongSelect={handleSelectMelody}
        handleOnBackBtnClick={handleOnBackBtnClick}
        onSongClick={handleOnBackBtnClick}
      />
    </div>
  );
};

export default SongsBtn;

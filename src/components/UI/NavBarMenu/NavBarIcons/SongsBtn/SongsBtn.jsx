import songsIcon from "./img/songs.svg";
import SongsMenu from "../../../../Songs/SongsMenu/SongsMenu";
import { useState } from "react";

const SongsBtn = ({ songs, onSongSelect, onSongsMenuClick, disabled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    onSongsMenuClick();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSelectMelody = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOnBackBtnClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <img src={songsIcon} alt="songs-icon" onClick={toggleDropdown} />
      <SongsMenu
        isMenuOpen={isMenuOpen}
        handleSelectMelody={handleSelectMelody}
        handleOnBackBtnClick={handleOnBackBtnClick}
      />
    </div>
  );
};

export default SongsBtn;

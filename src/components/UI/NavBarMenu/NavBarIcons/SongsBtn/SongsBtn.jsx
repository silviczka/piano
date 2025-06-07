import songsIcon from "./img/songs.svg";
import SongsMenu from "../../../../Songs/SongsMenu/SongsMenu";
import { useState } from "react";
import Tippy from "@tippyjs/react";

const SongsBtn = ({ songs, onSongSelect, onSongsMenuClick, disabled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

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
      <Tippy content="Vyber si písničku.">
        <img
          src={songsIcon}
          alt="songs-icon"
          onClick={disabled ? undefined : toggleDropdown}
        />
      </Tippy>

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

import songsIcon from "./img/songs.svg";
import SongsMenu from "../../../../Songs/SongsMenu/SongsMenu";
import { useState } from "react";
import NavIconTooltip from "../../NavIconTooltip/NavIconTooltip";

const SongsBtn = ({
  songs,
  onSongSelect,
  onSongsMenuClick,
  disabled,
  onSongsMenuOpen,
  isMenuOpen,
}) => {
  const toggleDropdown = () => {
    onSongsMenuClick();
    onSongsMenuOpen();
  };

  const handleOnBackBtnClick = () => {
    onSongsMenuOpen();
  };

  const handleSelectMelody = (id, name) => {
    onSongSelect(id, name);
    // onSongsMenuOpen();
  };

  return (
    <div>
      <NavIconTooltip text="Vybrat písničku">
        <img
          src={songsIcon}
          alt="songs-icon"
          onClick={disabled ? undefined : toggleDropdown}
        />
      </NavIconTooltip>

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

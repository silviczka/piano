import './SongsMenu.css';
import songsIcon from './img/songs.svg';
import { useState } from 'react';

const SongsMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSelectMelody = (id, name) => {
    onSelect(id);
    setselectedMelody(name);
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <img src={songsIcon} alt="songs-icon" onClick={toggleDropdown} />
      <div className={isMenuOpen ? 'melody-menu' : 'melody-menu menu--closed'}>
        <div className="melodies">
          <div className="melodies-header">
            <div className="title">Vyber si píšničku a začni hrát.</div>
          </div>

          <div className="melodies-wrapper">
            <div className="melodies-item">
              {/*          {melodies.map((melody, index) => (
                <Melody
                  key={index}
                  id={index}
                  onMelodySelect={handleSelectMelody}
                  name={melody.header.title}
                />
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongsMenu;

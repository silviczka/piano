import "./NavBar.css";
import HomeBtn from "../NavBarIcons/HomeBtn/HomeBtn";
import PlayPauseBtn from "../NavBarIcons/PlayPauseBtn/PlayPauseBtn";

const NavBar = (props) => {
  return (
    <nav className="game-nav">
      <HomeBtn className={"menu-icon"} />
      <PlayPauseBtn />
    </nav>
  );
};

export default NavBar;

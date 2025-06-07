import "./NavBar.css";
import HomeBtn from "../NavBarIcons/HomeBtn/HomeBtn";

const NavBar = (props) => {
  return (
    <nav className="game-nav">
      <HomeBtn className={"menu-icon"} />
    </nav>
  );
};

export default NavBar;

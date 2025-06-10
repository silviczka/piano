import "./MenuPage.css";
import ModernLink from "../../components/ModernLink/ModernLink";
import foxImg from "./img/standingFox.webp";

const MenuPage = () => (
  <div className="menu-page">
    <div className="menu-wrapper">
      <h1 className="menu-header">Piano Game</h1>
      <nav className="menu-options">
        <ModernLink to="/game" label="Hrát" className="menu-button" />
        <ModernLink to="/tutorial" label="Trénink" className="menu-button" />
        <ModernLink to="/about" label="O projektu" className="menu-button" />
      </nav>
    </div>
    <img className="menu-fox-img" src={foxImg} alt="standing fox" />
  </div>
);

export default MenuPage;

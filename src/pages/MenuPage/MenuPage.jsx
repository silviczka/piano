import "./MenuPage.css";
import ModernLink from "../../components/ModernLink/ModernLink";

const MenuPage = () => (
  <div className="menu-page">
    <div className="menu-wrapper">
      <h1 className="menu-header">Piano Game</h1>
      <nav className="menu-options">
        <ModernLink to="/game" label="Hrát" className="menu-button" />
        <ModernLink to="/tutorial" label="Tutorial" className="menu-button" />
        <ModernLink to="/about" label="O projektu" className="menu-button" />
      </nav>
    </div>
  </div>
);

export default MenuPage;

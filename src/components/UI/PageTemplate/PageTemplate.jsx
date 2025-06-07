import "./PageTemplate.css";
import HomeBtn from "../NavBarMenu/NavBarIcons/HomeBtn/HomeBtn";

const PageTemplate = ({ children }) => {
  return (
    <div className="template-page">
      <div className="menu-button tutorial-button">
        <HomeBtn className={""} />
      </div>
      <div className="template-wrapper">{children}</div>
    </div>
  );
};

export default PageTemplate;

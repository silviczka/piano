import { Link } from "react-router-dom";
import homeIcon from "./img/home.svg";
import NavIconTooltip from "../../NavIconTooltip/NavIconTooltip";

const HomeBtn = ({ className }) => {
  return (
    <Link to="/">
      {className === "" ? (
        <img src={homeIcon} alt="home-icon" className={className} />
      ) : (
        <NavIconTooltip text="Hlavní menu">
          <img src={homeIcon} alt="home-icon" className={className} />
        </NavIconTooltip>
      )}
    </Link>
  );
};

export default HomeBtn;

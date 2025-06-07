import { Link } from "react-router-dom";
import homeIcon from "./img/home.svg";

const HomeBtn = ({ className }) => {
  return (
    <Link to="/">
      <img src={homeIcon} alt="home-icon" className={className} />
    </Link>
  );
};

export default HomeBtn;

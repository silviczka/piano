import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";

import homeIcon from "./img/home.svg";

const HomeBtn = ({ className }) => {
  return (
    <Link to="/">
      <Tippy content="Hlavní menu">
        <img
          src={homeIcon}
          alt="home-icon"
          className={className}
          title="Toto je tooltip obrázku"
        />
      </Tippy>
    </Link>
  );
};

export default HomeBtn;

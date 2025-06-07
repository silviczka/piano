import labelIconEnabled from "./img/noteLabelEnabled.svg";
import labelIconDisabled from "./img/noteLabelDisabled.svg";

const NoteLabelBtn = () => {
  return (
    <>
      <img
        src={labelIconEnabled}
        alt={"labels-enabled-icon"}
        className="menu-icon"
      />
    </>
  );
};

export default NoteLabelBtn;

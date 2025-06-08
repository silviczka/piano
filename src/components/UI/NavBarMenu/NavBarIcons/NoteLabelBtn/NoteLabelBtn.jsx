import labelIconEnabled from "./img/noteLabelEnabled.svg";
import labelIconDisabled from "./img/noteLabelDisabled.svg";
import NavIconTooltip from "../../NavIconTooltip/NavIconTooltip";

const NoteLabelBtn = ({ areNoteLabelsVisible, onLabelClick }) => {
  return (
    <>
      <NavIconTooltip
        text={areNoteLabelsVisible ? "Vypnout názvy not" : "Zapnout názvy not"}
      >
        <img
          src={areNoteLabelsVisible ? labelIconEnabled : labelIconDisabled}
          alt={
            areNoteLabelsVisible
              ? "labels-enabled-icon"
              : "labels-disabled-icon"
          }
          onClick={onLabelClick}
          className="menu-icon"
        />
      </NavIconTooltip>
    </>
  );
};

export default NoteLabelBtn;

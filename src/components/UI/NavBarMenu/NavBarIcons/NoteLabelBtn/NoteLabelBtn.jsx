import labelIconEnabled from "./img/noteLabelEnabled.svg";
import labelIconDisabled from "./img/noteLabelDisabled.svg";

const NoteLabelBtn = ({ areNoteLabelsVisible, onLabelClick }) => {
  return (
    <>
      <img
        src={areNoteLabelsVisible ? labelIconEnabled : labelIconDisabled}
        alt={
          areNoteLabelsVisible ? "labels-enabled-icon" : "labels-disabled-icon"
        }
        onClick={onLabelClick}
        className="menu-icon"
      />
    </>
  );
};

export default NoteLabelBtn;

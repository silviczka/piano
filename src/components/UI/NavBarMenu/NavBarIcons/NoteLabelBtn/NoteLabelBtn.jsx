import labelIconEnabled from "./img/noteLabelEnabled.svg";
import labelIconDisabled from "./img/noteLabelDisabled.svg";
import Tippy from "@tippyjs/react";

const NoteLabelBtn = ({ areNoteLabelsVisible, onLabelClick }) => {
  return (
    <>
      <Tippy
        content={areNoteLabelsVisible ? "Vypni názvy not." : "Zapni názvy not."}
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
      </Tippy>
    </>
  );
};

export default NoteLabelBtn;

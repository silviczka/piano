import "./BlackKey.css";
import PCKeyLabel from "../Labels/PCKeyLabel/PCKeyLabel";

const BlackKey = ({
  type,
  keyBind,
  areKeyBindLabelsVisible,
  offset,
  ...handlers
}) => {
  return (
    <svg
      className="key black"
      {...handlers}
      style={{
        left: `${offset}%`,
        overflow: "visible",
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="300"
      viewBox="0 0 100 300"
    >
      <PCKeyLabel
        type={type}
        keyBind={keyBind}
        isKeyBindLabelVisible={areKeyBindLabelsVisible}
      />
    </svg>
  );
};

export default BlackKey;

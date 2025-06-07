import "./WhiteKey.css";
import PCKeyLabel from "../Labels/PCKeyLabel/PCKeyLabel";

const WhiteKey = ({ type, keyBind, areKeyBindLabelsVisible, ...handlers }) => {
  return (
    <div className="key-wrapper">
      <svg
        className="key white"
        style={{
          overflow: "visible",
        }}
        {...handlers}
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

      <div className="key key-extension"></div>
    </div>
  );
};

export default WhiteKey;

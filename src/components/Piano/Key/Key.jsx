import "./Key.css";
import BlackKey from "../BlackKey/BlackKey";
import WhiteKey from "../WhiteKey/WhiteKey";

const Key = ({ type, offset, color, note, ...handlers }) => {
  return (
    <>
      {type === "white" ? (
        <WhiteKey
          offset={offset}
          type={type}
          color={color}
          note={note}
          {...handlers}
        />
      ) : (
        <BlackKey
          offset={offset}
          type={type}
          color={color}
          note={note}
          {...handlers}
        />
      )}
    </>
  );
};

export default Key;

import "./Key.css";
import BlackKey from "../BlackKey/BlackKey";
import WhiteKey from "../WhiteKey/WhiteKey";

const Key = ({ type, offset, ...handlers }) => {
  return (
    <>
      {type === "white" ? (
        <WhiteKey offset={offset} {...handlers} />
      ) : (
        <BlackKey offset={offset} {...handlers} />
      )}
    </>
  );
};

export default Key;

import "./Key.css";
import BlackKey from "../BlackKey/BlackKey";
import WhiteKey from "../WhiteKey/WhiteKey";

const Key = ({ type, offset, ...handlers }) => {
  return (
    <>
      {type === "white" ? (
        <WhiteKey offset={offset} type={type} {...handlers} />
      ) : (
        <BlackKey offset={offset} type={type} {...handlers} />
      )}
    </>
  );
};

export default Key;

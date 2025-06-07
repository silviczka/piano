import "./WhiteKey.css";

const WhiteKey = ({ ...handlers }) => {
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
      ></svg>
      <div className="key key-extension"></div>
    </div>
  );
};

export default WhiteKey;

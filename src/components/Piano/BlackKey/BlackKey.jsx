import "./BlackKey.css";

const BlackKey = ({ offset, ...handlers }) => {
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
    ></svg>
  );
};

export default BlackKey;

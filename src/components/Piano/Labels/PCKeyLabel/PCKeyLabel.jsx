import "./PCKeyLabel.css";

const PCKeyLabel = ({ type, keyBind, isKeyBindLabelVisible }) => {
  let fontSize = 24;
  let textColor = "#262D42";
  let textPos = "73%";
  let width = 70;
  let height = 40;
  console.log(type);
  if (type === "black") {
    width = 100;
    fontSize = 40;
    height = 55;
    textColor = "white";
    textPos = "65%";
  }
  return (
    <>
      {isKeyBindLabelVisible ? (
        <text
          x="50%"
          y={textPos}
          fontSize={fontSize}
          fill={textColor}
          textAnchor="middle"
          dominantBaseline="central"
        >
          {keyBind}
        </text>
      ) : null}
    </>
  );
};

export default PCKeyLabel;

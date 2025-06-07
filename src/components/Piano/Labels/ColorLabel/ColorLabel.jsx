const ColorLabel = ({ type, isColorVisible, color }) => {
  let width = 70;
  let height = 40;

  if (type === "black") {
    width = 100;
    height = 55;
  }
  return (
    <>
      {isColorVisible ? (
        <rect
          x="50%"
          y="88%"
          width={width}
          height={height}
          fill={color}
          rx={10}
          ry={10}
          transform={`translate(${-width / 2}, -${height / 2})`}
        />
      ) : null}
    </>
  );
};

export default ColorLabel;

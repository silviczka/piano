const NoteNameLabel = ({ note, isNoteLabelVisible, isColorVisible, type }) => {
  let fontSize = 24;
  if (type === "black") {
    fontSize = 40;
  }

  return (
    <>
      {isNoteLabelVisible ? (
        <text
          x="50%"
          y="88%"
          fontSize={fontSize}
          fill={
            !isColorVisible ? (type === "white" ? "#262D42" : "white") : "white"
          }
          textAnchor="middle"
          dominantBaseline="central"
        >
          {note}
        </text>
      ) : null}
    </>
  );
};

export default NoteNameLabel;

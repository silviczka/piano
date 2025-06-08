import whiteKeys from "../assets/keys/whiteKeys";
import blackKeys from "../assets/keys/blackKeys";

const getNoteColor = (note) => {
  if (note.includes("Sharp")) {
    note = note.replace("Sharp", "#");
  }
  const key = [...whiteKeys, ...blackKeys].find((k) => k.note === note);
  return key ? key.color : null;
};

export default getNoteColor;

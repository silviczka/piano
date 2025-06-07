import "./Key.css";
import { forwardRef } from "react";
import BlackKey from "../BlackKey/BlackKey";
import WhiteKey from "../WhiteKey/WhiteKey";

const Key = forwardRef((props, ref) => {
  const {
    note,
    type,
    keyBind,
    offset,
    color,
    areNoteLabelsVisible,
    isColorVisible,
    areKeyBindLabelsVisible,
    ...handlers
  } = props;
  return (
    <>
      {type === "white" ? (
        <WhiteKey {...props} ref={ref} />
      ) : (
        <BlackKey {...props} ref={ref} />
      )}
    </>
  );
});

export default Key;

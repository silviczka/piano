import whiteKeys from "../assets/keys/whiteKeys";
import blackKeys from "../assets/keys/blackKeys";

const getNoteyBindByKey = (keyBind) => {
  const key = [...whiteKeys, ...blackKeys].find((k) => k.keyBind === keyBind);
  return key ? key.note : null;
};

export default getNoteyBindByKey;

import "./OverlayScreen.css";

const OverlayScreen = ({ zIndex, children }) => {
  return (
    <div
      className="overlay"
      style={{
        "--zIndex-overlay": zIndex,
      }}
    >
      {children}
    </div>
  );
};

export default OverlayScreen;

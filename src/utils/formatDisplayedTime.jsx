const formatDisplayedTime = (seconds) => {
  const padWithZero = (num) => String(num).padStart(2, "0");
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${padWithZero(minutes)}:${padWithZero(secs)}`;
};

export default formatDisplayedTime;

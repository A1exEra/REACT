const generateId = () =>
  Math.floor(((Math.random() + 1) * 10000) / 0.5).toFixed(0);
export default generateId;

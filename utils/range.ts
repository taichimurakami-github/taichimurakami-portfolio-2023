const range = (start: number, end: number) =>
  [...Array(end + 1).keys()].slice(start);

export default range;

export const func1 = () => {
  return 10;
};

export const func2 = () => {
  return 20;
};
export const func3 = () => {
  return 30;
};
export const func4 = () => {
  return 40;
};

export const combineAll = () => {
  const result1 = func1();
  const result2 = func2();
  const result3 = func3();
  const result4 = func4();

  return result1 + result2 + result3 + result4;
};

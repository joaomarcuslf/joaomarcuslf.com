export const calcRT = (text: string) => {
  const wordsPerMinute = 200;
  let result = 0;

  let textLength = text.split(" ").length;
  if (textLength > 0) {
    return Math.ceil(textLength / wordsPerMinute);

  }
  return result;
};

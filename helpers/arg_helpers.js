const getArguments = (args) => {
  const resultObject = {};
  const [execute, files, ...etc] = args;
  etc.forEach((value, index, array) => {
    if (value.charAt(0) == "-") {
      if (index == array.length - 1) {
        resultObject[value.substring(1)] = true;
      } else if (array[index + 1].charAt(0) != "-") {
        resultObject[value.substring(1)] = array[index + 1];
      } else {
        resultObject[value.substring(1)] = true;
      }
    }
  });
  return resultObject;
};

export { getArguments };

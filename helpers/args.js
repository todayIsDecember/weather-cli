const getArgs = (args) => {
  const [executer, file, ...rest] = args;
  const res = {};
  rest.forEach((val, index, array) => {
    if (val.startsWith("-")) {
      if (index == array.length - 1) {
        res[val.slice(1)] = true;
      } else if (!array[index + 1].startsWith("-")) {
        res[val.slice(1)] = array[index + 1];
      } else {
        res[val.slice(1)] = true;
      }
    }
  });
  return res;
};

export default getArgs;

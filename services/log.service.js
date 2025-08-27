import dedent from "dedent-js";
import chalk from "chalk";

const printError = (error) => {
  return console.log(
    dedent`${chalk.red(" ERROR ")}
    ${error}`
  );
};

const printSuccess = (msg) => {
  return console.log(
    dedent`${chalk.green(" SUCCESS ")}
    ${msg}`
  );
};

const printHelp = () => {
  return console.log(
    dedent`${chalk.blue(" HELP ")}
    Без параметров - вывод погоды
		-s [CITY] для установки города
		-h для вывода помощи
		-t [API_KEY] для сохранения токена
    `
  );
};

export { printError, printSuccess, printHelp };

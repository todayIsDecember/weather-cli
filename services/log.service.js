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
		-c [CITY] для установки города
		-h для вывода помощи
		-t [API_KEY] для сохранения токена
    `
  );
};

const printWeather = (res, icon) => {
  console.log(
    dedent`${chalk.yellow(" WEATHER ")} Погода в місті ${res.name}
		${icon}  ${res.weather[0].description}
		Температура: ${res.main.temp} (відчувається як ${res.main.feels_like})
		Вологість: ${res.main.humidity}%
		Швидкість вітра: ${res.wind.speed}
		`
  );
};

export { printError, printSuccess, printHelp, printWeather };

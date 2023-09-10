import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error) => {
  console.log(`${chalk.bgRed(" ERROR ")} ${error}`);
};

const printSuccess = (message) => {
  console.log(`${chalk.bgGreen(" SUCCESS ")} ${message}`);
};

const printHelp = () => {
  console.log(
    dedent`
      ${chalk.bgCyan(" HELP ")}
      Без параметрів -- вивід погоди
      -h -- допомога
      -s -- задати місто
      -t -- задати токен
    `
  );
};

const printWeather = (res, icon) => {
  console.log(
    dedent`
      ${chalk.bgWhite(" WEATHER ")} погода у місті ${res.name}
      ${icon} ${res.weather[0].description}
      Темпаратура: ${res.main.temp} (відчувається як ${res.main.feels_like})
      Вологість: ${res.main.humidity}
      Швидкість вітра: ${res.wind.speed}
    `
  );
};

export { printError, printSuccess, printHelp, printWeather };

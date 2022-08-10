import chalk from 'chalk';
import dedent from 'dedent';

const printError = (error) => {
  console.log(`${chalk.bgRed(' ERROR ')} ${error}`);
};

const printSuccess = (msg) => {
  console.log(`${chalk.bgGreen(' SUCCESS ')} ${msg}`);
};

const printHelp = () => {
  console.log(
    dedent(`
    ${chalk.bgCyan(' HELP ')}
    без параметрів - виведення погоди
    -s [SITY] для встановлення міста
    -h для виведення допомоги
    -t [API_KEY] для збереження токена
    `),
  );
};

const printWeather = (res) => {
  console.log(
    dedent(`
    ${chalk.bgYellow(' WEATHER ')} погода в місті ${res.name}
    ${res.weather[0].description}
    температура: ${res.main.temp} (відчувається як ${res.main.feels_like})
    вологість: ${res.main.humidity}%
    швидкість вітра: ${res.wind.speed}
    `),
  );
};

export {
  printError, printSuccess, printHelp, printWeather,
};

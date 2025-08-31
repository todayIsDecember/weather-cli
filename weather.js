import getArgs from "./helpers/args.js";
import { getIcon, getWeather } from "./services/api.service.js";
import {
  printHelp,
  printSuccess,
  printError,
  printWeather,
} from "./services/log.service.js";
import { saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError("Не переданий токен");
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess("Токен успішно установлений");
  } catch (error) {
    printError(error.message);
  }
};

const saveCity = async (city) => {
  if (!city.length) {
    printError("Не передане місто");
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city);
    printSuccess("Місто успішно збережено");
  } catch (error) {
    printError(e.message);
  }
};

const getForecast = async () => {
  try {
    const weather = await getWeather();
    return printWeather(weather, getIcon(weather.weather[0].icon));
  } catch (e) {
    if (e?.response?.status == 404) {
      printError("Не правильно передане місто");
    } else if (e?.response?.status == 401) {
      printError("Не правильно переданий токен");
    } else {
      printError(e.message);
    }
  }
};

const initCLI = () => {
  const args = getArgs(process.argv);
  if (args.c) {
    return saveCity(args.c);
  }
  if (args.t) {
    return saveToken(args.t);
  }
  if (args.h) {
    printHelp();
  }

  getForecast();
};

initCLI();

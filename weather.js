#!/usr/bin/env node

import { getArguments } from "./helpers/arg_helpers.js";
import { getWeather, getIcon } from "./services/api.service.js";
import {
  printError,
  printHelp,
  printSuccess,
  printWeather,
} from "./services/log.service.js";
import { saveKeyValue, ARGS_DICTIONARY } from "./services/storage.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError("Не переданий токен");
    return;
  }
  try {
    await saveKeyValue(ARGS_DICTIONARY.token, token);
    return printSuccess("Токен збережено");
  } catch (error) {
    return printError(error.message);
  }
};

const saveCity = async (city) => {
  if (!city.length) {
    printError("Не переданий місто");
    return;
  }
  try {
    await saveKeyValue(ARGS_DICTIONARY.city, city);
    return printSuccess("Місто збережено");
  } catch (error) {
    return printError(error.message);
  }
};

const getForcast = async () => {
  try {
    const weather = await getWeather();
    printWeather(weather, getIcon(weather.weather[0].icon));
  } catch (e) {
    if (e?.response?.status == 404) {
      printError("Неправильно задане місто");
    } else if (e?.response?.status == 401) {
      printError("Неправильно заданий токен");
    } else {
      printError(e.message);
    }
  }
};

const initCLI = () => {
  const args = getArguments(process.argv);
  if (args.h) {
    printHelp();
  }
  if (args.s) {
    return saveCity(args.s);
  }
  if (args.t) {
    return saveToken(args.t);
  }
  getForcast();
};

initCLI();

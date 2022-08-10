#!/usr/bin/env node
import { getArguments } from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import {
  printHelp, printSuccess, printError, printWeather,
} from './services/log.service.js';
import { saveKeyValue, getKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';

const saveToken = async (token) => {
  if (!token.length) {
    printError('не переданий токен');
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess('Токен збережений');
  } catch (error) {
    printError(error.message);
  }
};

const saveCity = async (city) => {
  if (!city.length) {
    printError('не передане місто');
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city);
    printSuccess('місто збережено');
  } catch (error) {
    printError(error.message);
  }
};

const getForcast = async () => {
  try {
    const city = await getKeyValue(TOKEN_DICTIONARY.city);
    const weather = await getWeather(city);
    printWeather(weather);
  } catch (e) {
    if (e?.response?.status == 404) {
      printError('Неправильно вказане місто');
    } else if (e?.response?.status == 401) {
      printError('Неправильно вказаний токен');
    } else {
      printError(e.message);
    }
  }
};

// eslint-disable-next-line consistent-return
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

// 90d10f105cdc537d81e289814c5a7f09

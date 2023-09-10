import https from "https";
import { getKeyValue, ARGS_DICTIONARY } from "./storage.service.js";
import axios from "axios";

const getIcon = (icon) => {
	switch (icon.slice(0, -1)) {
		case '01':
			return '☀️';
		case '02':
			return '🌤️';
		case '03':
			return '☁️';
		case '04':
			return '☁️';
		case '09':
			return '🌧️';
		case '10':
			return '🌦️';
		case '11':
			return '🌩️';
		case '13':
			return '❄️';
		case '50':
			return '🌫️';
	}
};

const getWeather = async () => {
  let token = process.env.TOKEN || (await getKeyValue(ARGS_DICTIONARY.token));
  let city = process.env.CITY || (await getKeyValue(ARGS_DICTIONARY.city));
  if (token === undefined) {
    throw new Error("Не заданий ключ API, використовуйте команду -t [apiKey]");
  }
  if (city === undefined) {
    throw new Error("Не задане місто, використовуйте команду -s [city]");
  }
  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: token,
        units: "metric",
        lang: "ua",
      },
    }
  );
  return data;
};

export { getWeather, getIcon };

import https from "https";
import { getKeyValue, TOKEN_DICTIONARY } from "./storage.service.js";
import axios from "axios";
import { printError } from "./log.service.js";

const getIcon = (icon) => {
  switch (icon.slice(0, -1)) {
    case "01":
      return "☀️";
    case "02":
      return "🌤️";
    case "03":
      return "☁️";
    case "04":
      return "☁️";
    case "09":
      return "🌧️";
    case "10":
      return "🌦️";
    case "11":
      return "🌩️";
    case "13":
      return "❄️";
    case "50":
      return "🌫️";
  }
};

const getWeather = async () => {
  const apiKey =
    process.env.TOKEN ?? (await getKeyValue(TOKEN_DICTIONARY.token));
  if (!apiKey) {
    printError("Не переданий токен. Передайте його через команду -t [token]");
    return;
  }

  const city = process.env.CITY ?? (await getKeyValue(TOKEN_DICTIONARY.city));
  if (!city) {
    printError("Не передане місто. Передайте його через команду -c [city]");
    return;
  }
  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: apiKey,
        lang: "ua",
        units: "metric",
      },
    }
  );

  return data;

  // const url = new URL("https://api.openweathermap.org/data/2.5/weather");
  // url.searchParams.append("q", city);
  // url.searchParams.append("appid", apiKey);
  // url.searchParams.append("lang", "uk");
  // url.searchParams.append("units", "metric");

  // https.get(url, (response) => {
  //   let res = "";
  //   response.on("data", (chunk) => {
  //     res += chunk;
  //   });
  //   response.on("end", () => {
  //     console.log(res);
  //   });
  // });
};

export { getWeather, getIcon };

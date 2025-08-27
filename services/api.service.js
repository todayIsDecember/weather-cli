import https from "https";
import { getKeyValue, TOKEN_DICTIONARY } from "./storage.service.js";
import axios from "axios";

const getWeather = async (city) => {
  const apiKey = await getKeyValue(TOKEN_DICTIONARY.token);
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

  console.log(data);

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

export { getWeather };

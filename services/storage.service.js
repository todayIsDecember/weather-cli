import { homedir } from "os";
import { join } from "path";
import { promises } from "fs";

const filePath = join(homedir(), "weather-data.json");

const TOKEN_DICTIONARY = {
  token: "token",
  city: "city",
};

const readFile = async (file) => {
  let data = {};
  if (await isExist(file)) {
    const f = await promises.readFile(file);
    return (data = JSON.parse(f));
  }
  return data;
};

const saveKeyValue = async (key, value) => {
  const dataStorage = await readFile(filePath);
  dataStorage[key] = value;
  await promises.writeFile(filePath, JSON.stringify(dataStorage));
};

const getKeyValue = async (key) => {
  const dataStorage = await readFile(filePath);
  return dataStorage[key];
};

const isExist = async (path) => {
  try {
    await promises.stat(path);
    return true;
  } catch (error) {
    return false;
  }
};

export { saveKeyValue, getKeyValue, TOKEN_DICTIONARY };

#!/usr/bin/env node

import { getArguments } from "./helpers/arg_helpers.js";

const initCLI = () => {
  const args = getArguments(process.argv);
  console.log(args);
};

initCLI();

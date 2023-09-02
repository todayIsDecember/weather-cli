#!/usr/bin/env node

import { getArguments } from "./helpers/arg_helpers.js";
import { printError, printHelp, printSuccess } from "./services/log.service.js";

const initCLI = () => {
  const args = getArguments(process.argv);
  if (args.h) {
    printHelp();
  }
  if (args.s) {
  }
  if (args.t) {
  }
};

initCLI();

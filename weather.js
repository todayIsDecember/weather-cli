#!/usr/bin/env node
import { getArguments } from './helpers/args.js';

const initCLI = () => {
  const args = getArguments(process.argv);
  console.log(args);
  if (args.h) {
    // helper
  }
  if (args.s) {
    // sity
  }
  if (args.t) {
    // token
  }
};

initCLI();

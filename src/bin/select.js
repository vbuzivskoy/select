#!/usr/bin/env node

import { Command } from 'commander';
import app from '..';

const program = new Command();
program
  .version('1.0.0')
  .usage('<selectRequestFile>')
  .description('Select data from JSON object according to certain conditions')
  .arguments('<selectRequestFile>')
  .action((selectRequestFile) => {
    console.log(app(selectRequestFile));
  });

program.parse(process.argv);

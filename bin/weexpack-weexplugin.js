#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');
const cli = require('../src/cli');
const publish = require('../src/publish/publish');
var project = require('../src/plugin/project')
program
    .command('create [platform-type]')
    .description('create a empty plugin container project')
    .option('-a, --ali', 'add ios platform only used in alibaba group')
    .action(function (platformName, options) {
      var projectRoot =  process.env.PWD || process.cwd()
      if (platformName == "ios" || platformName == "android") {
        project.createProject(projectRoot, platformName, options)
      } else {
        console.log();
        console.log(`  ${chalk.red('Invalid platform type:')} ${chalk.yellow(platformName)}`);
        process.exit();
      }
    });
program.parse(process.argv);
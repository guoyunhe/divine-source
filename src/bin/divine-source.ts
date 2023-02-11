#!/usr/bin/env node

import { Command } from 'commander';
import { scan } from '..';

function collect(value: string, previous: string[]): string[] {
  return previous.concat([value]);
}

const program = new Command('divine-source');

program
  .argument('<dirs...>', 'Files or directories to scan')
  .option(
    '--ignore <pattern>',
    'File pattern to ignore (repeat to add multiple patterns)',
    collect,
    []
  )
  .action(async (dirs: string[], options: any) => {
    const result = await scan(dirs, options);
  });

program.helpOption('-h, --help', 'Show full help');

if (typeof PACKAGE_VERSION === 'string') {
  program.version(PACKAGE_VERSION, '-v, --version', 'Show version number');
}

program.parse();

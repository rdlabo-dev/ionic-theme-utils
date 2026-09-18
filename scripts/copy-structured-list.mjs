#!/usr/bin/env node

import { copyFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import process from 'node:process';
import { URL } from 'node:url';

const destination = process.argv[2];

if (!destination) {
  throw new Error('Usage: rdlabo-copy-structured-list <destination>');
}

const destinationPath = resolve(destination);

await mkdir(dirname(destinationPath), { recursive: true });
await copyFile(new URL('../src/styles/structured-list.scss', import.meta.url), destinationPath);

#!/usr/bin/env node

import { copyFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import process from 'node:process';
import { URL } from 'node:url';

const destination = process.argv[2];

if (!destination) {
  throw new Error('Usage: rdlabo-copy-structured-list <destination>');
}

await copyFile(new URL('../src/styles/structured-list.scss', import.meta.url), resolve(destination));

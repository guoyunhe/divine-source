import glob from 'fast-glob';
import { stat } from 'fs/promises';
import { parse } from './parse';

export interface ScanOptions {
  ignore?: string[];
}

export async function scan(dirs: string[], options?: ScanOptions) {
  const { ignore = ['**/*.{test,spec}.{js,cjs,mjs,jsx,ts,cts,mts,tsx}'] } = options || {};

  const files = new Set<string>();
  for (let i = 0; i < dirs.length; i++) {
    const dir = dirs[i];
    const info = await stat(dir);
    if (info.isDirectory()) {
      (
        await glob(dir + '/**/*.{css,scss,js,cjs,mjs,jsx,ts,cts,mts,tsx}', {
          ignore,
        })
      ).forEach((f) => files.add(f));
    } else if (info.isFile()) {
      files.add(dir);
    }
  }

  return Promise.all(Array.from(files).map((f) => parse(f)));
}

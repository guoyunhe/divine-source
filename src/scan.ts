import glob from 'fast-glob';

export interface ScanOptions {
  ignore?: string[];
  cwd?: string;
}

export async function scan(dir: string, options?: ScanOptions) {
  const { ignore = ['**/*.{test,spec}.{js,cjs,mjs,jsx,ts,cts,mts,tsx}'], cwd } = options || {};
  const files = await glob(dir + '/**/*.{css,scss,js,cjs,mjs,jsx,ts,cts,mts,tsx}', {
    ignore,
    cwd,
  });

  console.log(files);
}

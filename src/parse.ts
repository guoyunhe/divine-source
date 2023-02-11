import { readFile } from 'fs/promises';
import { parseTS } from './parsers/parseTS';

export async function parse(fileName: string) {
  const fileContent = await readFile(fileName, 'utf-8');
  const fileExtension = fileName.substring(fileName.lastIndexOf('.'));
  switch (fileExtension) {
    case '.js':
    case '.cjs':
    case '.mjs':
    case '.jsx':
    case '.ts':
      return await parseTS(fileContent);
    default:
      return null;
  }
}

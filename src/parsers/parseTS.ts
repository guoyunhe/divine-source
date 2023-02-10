import { transform } from 'sucrase';
import { countLines } from '../helpers/countLines';
import { removeBlank } from '../helpers/removeBlank';
import { removeImportTypeScript } from '../helpers/removeImportTypeScript';
import { ParseResult } from '../types/ParseResult';

export async function parseTS(source: string): Promise<ParseResult> {
  const total = countLines(source);
  let codes = total;

  const sourceNoBlank = removeBlank(source);
  const blanks = codes - countLines(sourceNoBlank);
  codes -= blanks;

  const sourceNoComment = removeBlank(sourceNoBlank.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, ''));
  const comments = codes - countLines(sourceNoComment);
  codes -= comments;

  const sourceNoImport = removeBlank(removeImportTypeScript(sourceNoComment));
  const imports = codes - countLines(sourceNoImport);
  codes -= imports;

  const { code: transformed } = await transform(sourceNoImport, {
    transforms: ['typescript', 'jsx'],
  });
  const sourceNoType = removeBlank(transformed.replace('const _jsxFileName = "";', ''));
  const types = codes - countLines(sourceNoType);
  codes -= types;

  return {
    total,
    codes,
    imports,
    types,
    comments,
    blanks,
  };
}

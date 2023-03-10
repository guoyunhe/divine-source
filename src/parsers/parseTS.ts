import { transform } from 'sucrase';
import { countLines } from '../helpers/countLines';
import { removeBlank } from '../helpers/removeBlank';
import { removeComment } from '../helpers/removeComment';
import { removeImportTypeScript } from '../helpers/removeImportTypeScript';
import { ParseResult } from '../types/ParseResult';

export async function parseTS(source: string): Promise<ParseResult> {
  const totalLines = countLines(source);
  let codeLines = totalLines;

  const sourceNoBlank = removeBlank(source);
  const blankLines = codeLines - countLines(sourceNoBlank);
  codeLines -= blankLines;

  const sourceNoComment = removeBlank(removeComment(sourceNoBlank));
  const commentLines = codeLines - countLines(sourceNoComment);
  codeLines -= commentLines;

  const sourceNoImport = removeBlank(removeImportTypeScript(sourceNoComment));
  const importLines = codeLines - countLines(sourceNoImport);
  codeLines -= importLines;

  let typeLines = 0;
  try {
    const { code: transformed } = await transform(sourceNoImport, {
      transforms: ['typescript', 'jsx'],
    });
    const sourceNoType = removeBlank(transformed.replace('const _jsxFileName = "";', ''));
    typeLines = codeLines - countLines(sourceNoType);
    codeLines -= typeLines;
  } catch (e) {
    console.log('Failed to parse source code:');
    console.log(sourceNoImport);
    console.log(e);
  }

  return {
    totalLines,
    codeLines,
    importLines,
    typeLines,
    commentLines,
    blankLines,
  };
}

import { countLines } from '../helpers/countLines';
import { removeBlank } from '../helpers/removeBlank';
import { removeComment } from '../helpers/removeComment';
import { removeCSSImport } from '../helpers/removeCSSImport';
import { ParseResult } from '../types/ParseResult';

export async function parseCSS(source: string): Promise<ParseResult> {
  const totalLines = countLines(source);
  let codeLines = totalLines;

  const sourceNoBlank = removeBlank(source);
  const blankLines = codeLines - countLines(sourceNoBlank);
  codeLines -= blankLines;

  const sourceNoComment = removeBlank(removeComment(sourceNoBlank));
  const commentLines = codeLines - countLines(sourceNoComment);
  codeLines -= commentLines;

  const sourceNoImport = removeBlank(removeCSSImport(sourceNoComment));
  const importLines = codeLines - countLines(sourceNoImport);
  codeLines -= importLines;

  return {
    totalLines,
    codeLines,
    importLines,
    commentLines,
    blankLines,
  };
}

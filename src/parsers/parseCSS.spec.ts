import { readFile } from 'fs/promises';
import { parseCSS } from './parseCSS';

describe('parseCSS()', () => {
  it('parse simple CSS', async () => {
    const content = await readFile('examples/style.css', 'utf-8');
    const result = await parseCSS(content);
    expect(result).toEqual({
      blankLines: 7,
      codeLines: 16,
      commentLines: 7,
      importLines: 0,
      totalLines: 30,
    });
  });
});

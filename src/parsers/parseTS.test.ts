import { readFile } from 'fs/promises';
import { parseTS } from './parseTS';

describe('parseTS()', () => {
  it('parse function', async () => {
    const content = await readFile('examples/function.ts', 'utf-8');
    const result = await parseTS(content);
    expect(result).toEqual({
      blankLines: 3,
      codeLines: 6,
      commentLines: 7,
      importLines: 0,
      totalLines: 17,
      typeLines: 1,
    });
  });

  it('parse react component', async () => {
    const content = await readFile('examples/react.tsx', 'utf-8');
    const result = await parseTS(content);
    expect(result).toEqual({
      blankLines: 3,
      codeLines: 9,
      commentLines: 0,
      importLines: 1,
      totalLines: 16,
      typeLines: 3,
    });
  });
});

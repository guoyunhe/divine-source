import { readFile } from 'fs/promises';
import { parseTS } from './parseTS';

describe('parseTS()', () => {
  it('parse function', async () => {
    const content = await readFile('examples/function.ts', 'utf-8');
    const result = await parseTS(content);
    expect(result).toEqual({
      blanks: 3,
      codes: 6,
      comments: 7,
      imports: 0,
      total: 17,
      types: 1,
    });
  });

  it('parse react component', async () => {
    const content = await readFile('examples/react.tsx', 'utf-8');
    const result = await parseTS(content);
    expect(result).toEqual({
      blanks: 3,
      codes: 9,
      comments: 0,
      imports: 1,
      total: 16,
      types: 3,
    });
  });
});

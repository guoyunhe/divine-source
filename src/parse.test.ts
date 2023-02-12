import { parse } from './parse';

describe('parse()', () => {
  it('parse JavaScript', async () => {
    expect(await parse('examples/function.js')).toEqual({
      blankLines: 2,
      codeLines: 6,
      commentLines: 6,
      importLines: 0,
      totalLines: 14,
      typeLines: 0,
    });
  });
});

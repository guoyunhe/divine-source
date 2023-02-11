import { parse } from './parse';

describe('parse()', () => {
  it('parse JavaScript', async () => {
    expect(await parse('examples/function.js')).toEqual({
      blanks: 2,
      codes: 6,
      comments: 6,
      imports: 0,
      total: 14,
      types: 0,
    });
  });
});

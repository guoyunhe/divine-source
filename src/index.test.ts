import * as members from '.';

describe('index', () => {
  it('members', async () => {
    expect(Object.keys(members)).toEqual(['scan', 'parse']);
  });
});

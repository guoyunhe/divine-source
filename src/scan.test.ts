import { scan } from './scan';

describe('scan()', () => {
  it('scan directory', async () => {
    await scan('src');
  });
});

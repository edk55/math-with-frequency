import { quantile } from '../src/index';

describe('Index', () => {
  it('Should export quantile function', () => {
    expect(quantile).toBeDefined();
  });
});

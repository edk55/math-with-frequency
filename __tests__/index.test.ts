import { mean, quantile } from '../src/index';

describe('Index', () => {
  it('Should export quantile function', () => {
    expect(quantile).toBeDefined();
  });

  it('Should export mean function', () => {
    expect(mean).toBeDefined();
  });
});

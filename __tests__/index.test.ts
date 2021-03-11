import { mean, quantile, StandardDeviationType, std } from '../src/index';

describe('Index', () => {
  it('Should export quantile function', () => {
    expect(quantile).toBeDefined();
  });

  it('Should export mean function', () => {
    expect(mean).toBeDefined();
  });

  it('Should export std function', () => {
    expect(std).toBeDefined();
  });

  it('Should export StandardDeviationType enum', () => {
    expect(StandardDeviationType).toBeDefined();
  });
});

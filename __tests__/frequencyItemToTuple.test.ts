import { frequencyItemToTuple } from '../src/utils/frequencyItemToTuple';

describe('Utils', () => {
  describe('frequencyItemToTuple', () => {
    it('Should convert object value to tuple with frequency', () => {
      const result = frequencyItemToTuple({ frequency: 3, value: 99 });

      expect(result).toEqual([99, 3]);
    });

    it('Should convert tuple without frequency to tuple with frequency', () => {
      const result = frequencyItemToTuple([99]);

      expect(result).toEqual([99, 1]);
    });

    it('Should accept object as value', () => {
      const result = frequencyItemToTuple({ frequency: 10, value: { test: true } });

      expect(result).toEqual([{test: true}, 10]);
    });
  });
});

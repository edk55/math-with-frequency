import { quantityItemToTuple } from '../src/utils/quantityItemToTuple';

describe('Utils', () => {
  describe('quantityItemToTuple', () => {
    it('Should convert object value to tuple with quantity', () => {
      const result = quantityItemToTuple({ quantity: 3, value: 99 });

      expect(result).toEqual([99, 3]);
    });

    it('Should convert tuple without quantity to tuple with quantity', () => {
      const result = quantityItemToTuple([99]);

      expect(result).toEqual([99, 1]);
    });

    it('Should accept object as value', () => {
      const result = quantityItemToTuple({ quantity: 10, value: { test: true } });

      expect(result).toEqual([{test: true}, 10]);
    });
  });
});

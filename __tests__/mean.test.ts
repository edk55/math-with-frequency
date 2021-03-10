import { mean as mathMean } from 'mathjs';

import { mean } from '../src';
import { arrayByQuantity } from './utils/arrayByQuantity';

describe('Math functions', () => {
  describe('mean', () => {
    it('Should accept array of objects or tuples', () => {
      const result = mean([{ value: 1, quantity: 1 }, [1, 1]]);

      expect(result).toBe(1);
    });

    it('Should return same results as mathjs mean function', () => {
      const input = [
        { value: -100, quantity: 29 },
        { value: 439, quantity: 2 },
        { value: 439, quantity: 39 },
        { value: 0, quantity: 4 },
        { value: 4, quantity: 200 },
        { value: 98, quantity: 39 },
      ];

      expect(mean(input.slice(0, 1))).toBe(mathMean(arrayByQuantity(input.slice(0, 1))));
      expect(mean(input.slice(1, 5))).toBe(mathMean(arrayByQuantity(input.slice(1, 5))));
      expect(mean(input.slice(0, 5))).toBe(mathMean(arrayByQuantity(input.slice(0, 5))));
      expect(mean(input.slice(0, 4))).toBe(mathMean(arrayByQuantity(input.slice(0, 4))));
      expect(mean(input.slice(0, 2))).toBe(mathMean(arrayByQuantity(input.slice(0, 2))));
    });

    it('Should work with big quantity numbers', () => {
      const input = [
        { value: 1, quantity: 1000000000 },
        { value: 2, quantity: 1000000000 },
        { value: 3, quantity: 1000000000 },
      ];

      const result = mean(input);

      expect(result).toBe(mathMean([1, 2, 3]));
    });
  });
});

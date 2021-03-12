import { mean as mathMean } from 'mathjs';

import { mean } from '../src';
import { arrayFromFrequency } from './utils/arrayFromFrequency';

describe('Math functions', () => {
  describe('mean', () => {
    it('Should accept array of objects or tuples', () => {
      const result = mean([{ value: 1, frequency: 1 }, [1, 1]]);

      expect(result).toBe(1);
    });

    it('Should throw if pass invalid frequency value', () => {
      const run = () => mean([{ value: 1, frequency: -1 }]);

      expect(run).toThrow();
    });

    it('Should return same results as mathjs mean function', () => {
      const input = [
        { value: -100, frequency: 29 },
        { value: 439, frequency: 2 },
        { value: 439, frequency: 39 },
        { value: 0, frequency: 4 },
        { value: 4, frequency: 200 },
        { value: 98, frequency: 39 },
      ];

      expect(mean(input.slice(0, 1))).toBe(mathMean(arrayFromFrequency(input.slice(0, 1))));
      expect(mean(input.slice(1, 5))).toBe(mathMean(arrayFromFrequency(input.slice(1, 5))));
      expect(mean(input.slice(0, 5))).toBe(mathMean(arrayFromFrequency(input.slice(0, 5))));
      expect(mean(input.slice(0, 4))).toBe(mathMean(arrayFromFrequency(input.slice(0, 4))));
      expect(mean(input.slice(0, 2))).toBe(mathMean(arrayFromFrequency(input.slice(0, 2))));
    });

    it('Should work with big frequency numbers', () => {
      const input = [
        { value: 1, frequency: 1000000000 },
        { value: 2, frequency: 1000000000 },
        { value: 3, frequency: 1000000000 },
      ];

      const result = mean(input);

      expect(result).toBe(mathMean([1, 2, 3]));
    });
  });
});

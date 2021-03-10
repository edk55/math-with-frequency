import { sampleStandardDeviation, standardDeviation } from 'simple-statistics';

import { std } from '../src';
import { StandardDeviationType } from '../src/std';
import { arrayByQuantity } from './utils/arrayByQuantity';

describe('Math functions', () => {
  describe('std', () => {
    it('Should accept array of objects or tuples', () => {
      const result = std([{ value: 1, quantity: 1 }, [1, 1]]);

      expect(result).toBe(0);
    });

    it('Should use default type and return same results as simple-statistics standardDiviation function', () => {
      const input = [
        { value: -100, quantity: 29 },
        { value: -100, quantity: 1 },
        { value: 439, quantity: 2 },
        { value: 439, quantity: 39 },
        { value: 0, quantity: 4 },
        { value: 4, quantity: 200 },
        { value: 98, quantity: 39 },
      ];

      expect(std(input.slice(0, 1)).toFixed(5)).toBe(
        standardDeviation(arrayByQuantity(input.slice(0, 1))).toFixed(5)
      );
      expect(std(input.slice(1, 5)).toFixed(5)).toBe(
        standardDeviation(arrayByQuantity(input.slice(1, 5))).toFixed(5)
      );
      expect(std(input.slice(1, 3)).toFixed(5)).toBe(
        standardDeviation(arrayByQuantity(input.slice(1, 3))).toFixed(5)
      );
      expect(std(input.slice(0, 5)).toFixed(5)).toBe(
        standardDeviation(arrayByQuantity(input.slice(0, 5))).toFixed(5)
      );
      expect(std(input.slice(0, 4)).toFixed(5)).toBe(
        standardDeviation(arrayByQuantity(input.slice(0, 4))).toFixed(5)
      );
      expect(std(input.slice(0, 2)).toFixed(5)).toBe(
        standardDeviation(arrayByQuantity(input.slice(0, 2))).toFixed(5)
      );
    });

    it('Should throw an error if type.SAMPLE and totalQuantity is less than two', () => {
      const run = () => std([[-100]], StandardDeviationType.SAMPLE);

      expect(run).toThrow('Total quantity should be not less than 2');
    });

    it('Should use type.SAMPLE and result must be the same as simple-statistics sampleStandardDeviation', () => {
      const input = [
        { value: -100, quantity: 29 },
        { value: -100, quantity: 1 },
        { value: 439, quantity: 2 },
        { value: 439, quantity: 39 },
        { value: 0, quantity: 4 },
        { value: 4, quantity: 200 },
        { value: 98, quantity: 39 },
      ];

      expect(std(input.slice(0, 1), StandardDeviationType.SAMPLE).toFixed(5)).toBe(
        sampleStandardDeviation(arrayByQuantity(input.slice(0, 1))).toFixed(5)
      );
      expect(std(input.slice(1, 5), StandardDeviationType.SAMPLE).toFixed(5)).toBe(
        sampleStandardDeviation(arrayByQuantity(input.slice(1, 5))).toFixed(5)
      );
      expect(std(input.slice(1, 3), StandardDeviationType.SAMPLE).toFixed(5)).toBe(
        sampleStandardDeviation(arrayByQuantity(input.slice(1, 3))).toFixed(5)
      );
      expect(std(input.slice(0, 5), StandardDeviationType.SAMPLE).toFixed(5)).toBe(
        sampleStandardDeviation(arrayByQuantity(input.slice(0, 5))).toFixed(5)
      );
      expect(std(input.slice(0, 4), StandardDeviationType.SAMPLE).toFixed(5)).toBe(
        sampleStandardDeviation(arrayByQuantity(input.slice(0, 4))).toFixed(5)
      );
      expect(std(input.slice(0, 2), StandardDeviationType.SAMPLE).toFixed(5)).toBe(
        sampleStandardDeviation(arrayByQuantity(input.slice(0, 2))).toFixed(5)
      );
    });
  });
});

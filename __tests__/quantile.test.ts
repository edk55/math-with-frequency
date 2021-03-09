import { quantileSeq } from 'mathjs';

import { quantile } from '../src';
import { arrayByQuantity } from './utils/arrayByQuantity';

describe('Math functions', () => {
  describe('quantile', () => {
    it('Should accept array of objects or tuples', () => {
      const result = quantile([{ value: 1, quantity: 1 }, [1, 1]], 1);

      expect(result).toBe(1);
    });

    it('Should sort input values if isAscSorted is false', () => {
      const input = [{ value: 1 }, { value: 0 }];
      const start = quantile(input, 0);
      const closeStart = quantile(input, 0.01);
      const end = quantile(input, 1);
      const closeEnd = quantile(input, 0.99);

      expect(start).toBe(quantileSeq(arrayByQuantity(input), 0));
      expect(closeStart).toBe(quantileSeq(arrayByQuantity(input), 0.01));
      expect(end).toBe(quantileSeq(arrayByQuantity(input), 1));
      expect(closeEnd).toBe(quantileSeq(arrayByQuantity(input), 0.99));
    });

    it('Should use default value of Quantity as 1', () => {
      const result = quantile([[1], { value: 0 }], 0.5);

      expect(result).toBe(
        quantileSeq(
          arrayByQuantity([
            { value: 1, quantity: 1 },
            { value: 0, quantity: 1 },
          ]),
          0.5
        )
      );
    });

    it('Should calc quantile 0.5 (median) specifying quantity and total quantity is 103', () => {
      const input = [
        { value: 0, quantity: 49 },
        { value: 1, quantity: 1 },
        { value: 3, quantity: 3 }, // quantity is odd, so the median is here
        { value: 500, quantity: 50 },
      ];
      const result = quantile(input, 0.5);

      expect(result).toBe(quantileSeq(arrayByQuantity(input), 0.5));
    });

    it('Should return same quantile result as mathjs calculated', () => {
      // just some random data :)
      const input = [
        { value: -200, quantity: 100 },
        { value: -150, quantity: 1 },
        { value: -400, quantity: 50 },
        { value: 344, quantity: 999 },
        { value: 1, quantity: 1 },
      ];

      expect(quantile(input, 0.001)).toBe(quantileSeq(arrayByQuantity(input), 0.001));
      expect(quantile(input, 0.01)).toBe(quantileSeq(arrayByQuantity(input), 0.01));
      expect(quantile(input, 0.1)).toBe(quantileSeq(arrayByQuantity(input), 0.1));
      expect(quantile(input, 0.2)).toBe(quantileSeq(arrayByQuantity(input), 0.2));
      expect(quantile(input, 0.3)).toBe(quantileSeq(arrayByQuantity(input), 0.3));
      expect(quantile(input, 0.4)).toBe(quantileSeq(arrayByQuantity(input), 0.4));
      expect(quantile(input, 0.5)).toBe(quantileSeq(arrayByQuantity(input), 0.5));
      expect(quantile(input, 0.6)).toBe(quantileSeq(arrayByQuantity(input), 0.6));
      expect(quantile(input, 0.7)).toBe(quantileSeq(arrayByQuantity(input), 0.7));
      expect(quantile(input, 0.8)).toBe(quantileSeq(arrayByQuantity(input), 0.8));
      expect(quantile(input, 0.9)).toBe(quantileSeq(arrayByQuantity(input), 0.9));
      expect(quantile(input, 0.99)).toBe(quantileSeq(arrayByQuantity(input), 0.99));
      expect(quantile(input, 0.999)).toBe(quantileSeq(arrayByQuantity(input), 0.999));
    });

    it('Should correctly work with big quantity (1000000000) numbers', () => {
      const input = [
        { value: -100, quantity: 1000000000 },
        { value: 0, quantity: 1 },
        { value: 999, quantity: 1000000000 },
      ];

      const start = quantile(input, 0);
      const median = quantile(input, 0.5);
      const end = quantile(input, 1);

      expect(start).toBe(-100);
      expect(median).toBe(0);
      expect(end).toBe(999);
    });
  });
});

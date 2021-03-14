import { quantileSeq } from 'mathjs';

import { quantile } from '../src';
import { arrayFromFrequency } from './utils/arrayFromFrequency';

describe('Math functions', () => {
  describe('quantile', () => {
    it('Should accept array of objects or tuples', () => {
      const result = quantile([{ value: 1, frequency: 1 }, [1, 1]], 1);

      expect(result).toBe(1);
    });

    it('Should throw if pass invalid frequency value', () => {
      const run = () => quantile([{ value: 1, frequency: -1 }], 0);

      expect(run).toThrow();
    });

    it('Should sort input values if isAscSorted is false', () => {
      const input = [{ value: 1 }, { value: 0 }];
      const start = quantile(input, 0);
      const closeStart = quantile(input, 0.01);
      const end = quantile(input, 1);
      const closeEnd = quantile(input, 0.99);

      expect(start).toBe(quantileSeq(arrayFromFrequency(input), 0));
      expect(closeStart).toBe(quantileSeq(arrayFromFrequency(input), 0.01));
      expect(end).toBe(quantileSeq(arrayFromFrequency(input), 1));
      expect(closeEnd).toBe(quantileSeq(arrayFromFrequency(input), 0.99));
    });

    it('Should use default value of Frequency as 1', () => {
      const result = quantile([[1], { value: 0 }], 0.5);

      expect(result).toBe(
        quantileSeq(
          arrayFromFrequency([
            { value: 1, frequency: 1 },
            { value: 0, frequency: 1 },
          ]),
          0.5
        )
      );
    });

    it('Should calc quantile 0.5 (median) specifying frequency and total frequency is 103', () => {
      const input = [
        { value: 0, frequency: 49 },
        { value: 1, frequency: 1 },
        { value: 3, frequency: 3 }, // frequency is odd, so the median is here
        { value: 500, frequency: 50 },
      ];
      const result = quantile(input, 0.5);

      expect(result).toBe(quantileSeq(arrayFromFrequency(input), 0.5));
    });

    it('Should return same quantile result as mathjs calculated', () => {
      // just some random data :)
      const input = [
        { value: -200, frequency: 100 },
        { value: -150, frequency: 1 },
        { value: -400, frequency: 50 },
        { value: 344, frequency: 999 },
        { value: 1, frequency: 1 },
      ];

      expect(quantile(input, 0.001)).toBe(quantileSeq(arrayFromFrequency(input), 0.001));
      expect(quantile(input, 0.01)).toBe(quantileSeq(arrayFromFrequency(input), 0.01));
      expect(quantile(input, 0.1)).toBe(quantileSeq(arrayFromFrequency(input), 0.1));
      expect(quantile(input, 0.2)).toBe(quantileSeq(arrayFromFrequency(input), 0.2));
      expect(quantile(input, 0.3)).toBe(quantileSeq(arrayFromFrequency(input), 0.3));
      expect(quantile(input, 0.4)).toBe(quantileSeq(arrayFromFrequency(input), 0.4));
      expect(quantile(input, 0.5)).toBe(quantileSeq(arrayFromFrequency(input), 0.5));
      expect(quantile(input, 0.6)).toBe(quantileSeq(arrayFromFrequency(input), 0.6));
      expect(quantile(input, 0.7)).toBe(quantileSeq(arrayFromFrequency(input), 0.7));
      expect(quantile(input, 0.8)).toBe(quantileSeq(arrayFromFrequency(input), 0.8));
      expect(quantile(input, 0.9)).toBe(quantileSeq(arrayFromFrequency(input), 0.9));
      expect(quantile(input, 0.99)).toBe(quantileSeq(arrayFromFrequency(input), 0.99));
      expect(quantile(input, 0.999)).toBe(quantileSeq(arrayFromFrequency(input), 0.999));
    });

    it('Should correctly work with big frequency (1000000000) numbers', () => {
      const input = [
        { value: -100, frequency: 1000000000 },
        { value: 0, frequency: 1 },
        { value: 999, frequency: 1000000000 },
      ];

      const start = quantile(input, 0);
      const median = quantile(input, 0.5);
      const end = quantile(input, 1);

      expect(start).toBe(-100);
      expect(median).toBe(0);
      expect(end).toBe(999);
    });

    it('Should calculate readme quantile example correctly', () => {
      const input = [
        { value: 999, frequency: 1000 },
        { value: 3, frequency: 1 },
        { value: 1, frequency: 1000 },
      ];

      const median = quantile(input, 0.5);

      expect(median).toBe(3);
    });
  });
});

import { sampleStandardDeviation, standardDeviation } from 'simple-statistics';

import { std } from '../src';
import { StandardDeviationType } from '../src/std';
import { arrayFromFrequency } from './utils/arrayFromFrequency';

describe('Math functions', () => {
  describe('std', () => {
    it('Should accept array of objects or tuples', () => {
      const result = std([{ value: 1, frequency: 1 }, [1, 1]]);

      expect(result).toBe(0);
    });

    it('Should throw if pass invalid frequency value', () => {
      const run = () => std([{ value: 1, frequency: -1 }]);

      expect(run).toThrow();
    });

    it('Should use default type and return same results as simple-statistics standardDiviation function', () => {
      const input = [
        { value: -100, frequency: 29 },
        { value: -100, frequency: 1 },
        { value: 439, frequency: 2 },
        { value: 439, frequency: 39 },
        { value: 0, frequency: 4 },
        { value: 4, frequency: 200 },
        { value: 98, frequency: 39 },
      ];

      expect(std(input.slice(0, 1)).toFixed(5)).toBe(
        standardDeviation(arrayFromFrequency(input.slice(0, 1))).toFixed(5)
      );
      expect(std(input.slice(1, 5)).toFixed(5)).toBe(
        standardDeviation(arrayFromFrequency(input.slice(1, 5))).toFixed(5)
      );
      expect(std(input.slice(1, 3)).toFixed(5)).toBe(
        standardDeviation(arrayFromFrequency(input.slice(1, 3))).toFixed(5)
      );
      expect(std(input.slice(0, 5)).toFixed(5)).toBe(
        standardDeviation(arrayFromFrequency(input.slice(0, 5))).toFixed(5)
      );
      expect(std(input.slice(0, 4)).toFixed(5)).toBe(
        standardDeviation(arrayFromFrequency(input.slice(0, 4))).toFixed(5)
      );
      expect(std(input.slice(0, 2)).toFixed(5)).toBe(
        standardDeviation(arrayFromFrequency(input.slice(0, 2))).toFixed(5)
      );
    });

    it('Should throw an error if type.SAMPLE and totalFrequency is less than two', () => {
      const run = () => std([[-100]], StandardDeviationType.SAMPLE);

      expect(run).toThrow('Total frequency should be not less than 2');
    });

    it('Should use type.SAMPLE and result must be the same as simple-statistics sampleStandardDeviation', () => {
      const input = [
        { value: -100, frequency: 29 },
        { value: -100, frequency: 1 },
        { value: 439, frequency: 2 },
        { value: 439, frequency: 39 },
        { value: 0, frequency: 4 },
        { value: 4, frequency: 200 },
        { value: 98, frequency: 39 },
      ];

      expect(std(input.slice(0, 1), StandardDeviationType.SAMPLE).toFixed(5)).toBe(
        sampleStandardDeviation(arrayFromFrequency(input.slice(0, 1))).toFixed(5)
      );
      expect(std(input.slice(1, 5), StandardDeviationType.SAMPLE).toFixed(5)).toBe(
        sampleStandardDeviation(arrayFromFrequency(input.slice(1, 5))).toFixed(5)
      );
      expect(std(input.slice(1, 3), StandardDeviationType.SAMPLE).toFixed(5)).toBe(
        sampleStandardDeviation(arrayFromFrequency(input.slice(1, 3))).toFixed(5)
      );
      expect(std(input.slice(0, 5), StandardDeviationType.SAMPLE).toFixed(5)).toBe(
        sampleStandardDeviation(arrayFromFrequency(input.slice(0, 5))).toFixed(5)
      );
      expect(std(input.slice(0, 4), StandardDeviationType.SAMPLE).toFixed(5)).toBe(
        sampleStandardDeviation(arrayFromFrequency(input.slice(0, 4))).toFixed(5)
      );
      expect(std(input.slice(0, 2), StandardDeviationType.SAMPLE).toFixed(5)).toBe(
        sampleStandardDeviation(arrayFromFrequency(input.slice(0, 2))).toFixed(5)
      );
    });

    it('Should calculate readme std example correctly', () => {
      const input = [
        { value: -100, frequency: 5 },
        { value: 300, frequency: 15 },
        { value: 255, frequency: 55 },
      ];
      const populationStd = std(input);
      const sampleStd = std(input, StandardDeviationType.SAMPLE);

      expect(populationStd).toBe(92.69064437987016);
      expect(populationStd.toFixed(5)).toBe(
        standardDeviation(arrayFromFrequency(input)).toFixed(5)
      );
      expect(sampleStd).toBe(93.31483085585946);
      expect(sampleStd.toFixed(5)).toBe(
        sampleStandardDeviation(arrayFromFrequency(input)).toFixed(5)
      );
    });
  });
});

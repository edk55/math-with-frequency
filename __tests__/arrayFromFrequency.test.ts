import { arrayFromFrequency } from './utils/arrayFromFrequency';

describe('Test utils', () => {
  describe('arrayFromFrequency', () => {
    it('Should create array of numbers with undefined frequency (default value is 1)', () => {
      const numbers = arrayFromFrequency([{ value: 1 }, { value: 2 }, { value: 999 }]);

      expect(numbers).toHaveLength(3);
      expect(numbers).toEqual([1, 2, 999]);
    });

    it('Should create array of strings with undefined frequency (default value is 1)', () => {
      const strings = arrayFromFrequency([
        { value: 'test' },
        { value: 'qwerty' },
        { value: 'foo' },
        { value: 'bar' },
      ]);

      expect(strings).toHaveLength(4);
      expect(strings).toEqual(['test', 'qwerty', 'foo', 'bar']);
    });

    it('Should create array of numbers with specifying frequency', () => {
      const numbers = arrayFromFrequency([
        { value: 1, frequency: 3 },
        { value: 2, frequency: 5 },
      ]);

      expect(numbers).toHaveLength(8);
      expect(numbers).toEqual([1, 1, 1, 2, 2, 2, 2, 2]);
    });

    it('Should create array of numbers with specifying frequency and duplicating numbers declaration', () => {
      const numbers = arrayFromFrequency([
        { value: 2, frequency: 5 },
        { value: 2, frequency: 5 },
      ]);

      expect(numbers).toHaveLength(10);
      expect(numbers).toEqual([2, 2, 2, 2, 2, 2, 2, 2, 2, 2]);
    });
  });
});

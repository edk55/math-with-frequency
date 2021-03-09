import { arrayByQuantity } from './utils/arrayByQuantity';

describe('Test utils', () => {
  describe('arrayByQuantity', () => {
    it('Should create array of numbers with undefined quantity (default value is 1)', () => {
      const numbers = arrayByQuantity([{ value: 1 }, { value: 2 }, { value: 999 }]);

      expect(numbers).toHaveLength(3);
      expect(numbers).toEqual([1, 2, 999]);
    });

    it('Should create array of strings with undefined quantity (default value is 1)', () => {
      const strings = arrayByQuantity([
        { value: 'test' },
        { value: 'qwerty' },
        { value: 'foo' },
        { value: 'bar' },
      ]);

      expect(strings).toHaveLength(4);
      expect(strings).toEqual(['test', 'qwerty', 'foo', 'bar']);
    });

    it('Should create array of numbers with specifying quantity', () => {
      const numbers = arrayByQuantity([
        { value: 1, quantity: 3 },
        { value: 2, quantity: 5 },
      ]);

      expect(numbers).toHaveLength(8);
      expect(numbers).toEqual([1, 1, 1, 2, 2, 2, 2, 2]);
    });

    it('Should create array of numbers with specifying quantity and duplicating numbers declaration', () => {
      const numbers = arrayByQuantity([
        { value: 2, quantity: 5 },
        { value: 2, quantity: 5 },
      ]);

      expect(numbers).toHaveLength(10);
      expect(numbers).toEqual([2, 2, 2, 2, 2, 2, 2, 2, 2, 2]);
    });
  });
});

import { validateQuantity } from '../src/utils/validateQuantity';

describe('Utils', () => {
  describe('validateQuantity', () => {
    it('Should throw if quantity is less 0', () => {
      const run = () => validateQuantity([[1, -1]]);

      expect(run).toThrowError(`Quantity cannot be less than 1`);
    });

    it('Should throw an Error if quantity is Infinity', () => {
      const run = () => validateQuantity([[1, Infinity]]);

      expect(run).toThrowError('Quantity cannot be Infinity');
    });

    it('Should throw an Error if quantity is NaN', () => {
      const run = () => validateQuantity([[1, NaN]]);

      expect(run).toThrowError('Quantity cannot be NaN');
    });

    it('Should throw an Error if quantity is not an integer', () => {
      const run = () => validateQuantity([[1, 1.11]]);

      expect(run).toThrowError('Quantity must be an integer');
    });

    it("Shouldn't throw if quantity is a valid integer", () => {
      const run = () => validateQuantity([[1, 200]]);

      expect(run).not.toThrow();
    });
  });
});

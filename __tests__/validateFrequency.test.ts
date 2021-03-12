import { validateFrequency } from '../src/utils/validateFrequency';

describe('Utils', () => {
  describe('validateFrequency', () => {
    it('Should throw if frequency is less 0', () => {
      const run = () => validateFrequency([[1, -1]]);

      expect(run).toThrowError(`Frequency cannot be less than 1`);
    });

    it('Should throw an Error if frequency is Infinity', () => {
      const run = () => validateFrequency([[1, Infinity]]);

      expect(run).toThrowError('Frequency cannot be Infinity');
    });

    it('Should throw an Error if frequency is NaN', () => {
      const run = () => validateFrequency([[1, NaN]]);

      expect(run).toThrowError('Frequency cannot be NaN');
    });

    it('Should throw an Error if frequency is not an integer', () => {
      const run = () => validateFrequency([[1, 1.11]]);

      expect(run).toThrowError('Frequency must be an integer');
    });

    it("Shouldn't throw if frequency is a valid integer", () => {
      const run = () => validateFrequency([[1, 200]]);

      expect(run).not.toThrow();
    });
  });
});

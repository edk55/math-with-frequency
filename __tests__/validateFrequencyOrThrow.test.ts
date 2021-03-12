import { validateFrequencyOrThrow } from '../src/utils/validateFrequencyOrThrow';

describe('Utils', () => {
  describe('validateFrequencyOrThrow', () => {
    it('Should throw if frequency is less 0', () => {
      const run = () => validateFrequencyOrThrow(-1);

      expect(run).toThrowError(`Frequency cannot be less than 1`);
    });

    it('Should throw an Error if frequency is Infinity', () => {
      const run = () => validateFrequencyOrThrow(Infinity);

      expect(run).toThrowError('Frequency cannot be Infinity');
    });

    it('Should throw an Error if frequency is NaN', () => {
      const run = () => validateFrequencyOrThrow(NaN);

      expect(run).toThrowError('Frequency cannot be NaN');
    });

    it('Should throw an Error if frequency is not an integer', () => {
      const run = () => validateFrequencyOrThrow(1.11);

      expect(run).toThrowError('Frequency must be an integer');
    });

    it("Shouldn't throw if frequency is a valid integer", () => {
      const run = () => validateFrequencyOrThrow(200);

      expect(run).not.toThrow();
    });
  });
});

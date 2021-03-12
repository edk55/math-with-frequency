import { Frequency } from '../types';

export const validateFrequencyOrThrow = (frequency: Frequency): void => {
  if (frequency < 1) {
    throw new Error('Frequency cannot be less than 1');
  }

  if (frequency === Infinity) {
    throw new Error('Frequency cannot be Infinity');
  }

  if (isNaN(frequency)) {
    throw new Error('Frequency cannot be NaN');
  }

  if (frequency % 1 !== 0) {
    throw new Error('Frequency must be an integer');
  }
};

import { Frequency } from '../types';

export const validateFrequency = (tuples: [unknown, Frequency][]): void => {
  tuples.forEach((value) => {
    const [, frequency] = value;

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
  });
};

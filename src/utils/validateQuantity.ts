import { Quantity } from '../types';

export const validateQuantity = (tuples: [unknown, Quantity][]): void => {
  tuples.forEach((value) => {
    const [, quantity] = value;

    if (quantity < 1) {
      throw new Error('Quantity cannot be less than 1');
    }

    if (quantity === Infinity) {
      throw new Error('Quantity cannot be Infinity');
    }

    if (isNaN(quantity)) {
      throw new Error('Quantity cannot be NaN');
    }

    if (quantity % 1 !== 0) {
      throw new Error('Quantity must be an integer');
    }
  });
};

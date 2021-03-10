import { QuantityObject, QuantityTuple } from './types';
import { quantityItemToTuple } from './utils/quantityItemToTuple';
import { validateQuantity } from './utils/validateQuantity';

export const mean = (items: (QuantityObject<number> | QuantityTuple<number>)[]): number => {
  const tuples = items.map(quantityItemToTuple);
  validateQuantity(tuples); // if its not valid, then it will throw an Error

  const totalQuantity = tuples.reduce((acc, curr) => acc + curr[1], 0);
  const totalValue = tuples.reduce((acc, curr) => acc + curr[0] * curr[1], 0);

  return totalValue / totalQuantity;
};

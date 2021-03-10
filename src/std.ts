import { mean } from './mean';
import { QuantityObject, QuantityTuple } from './types';
import { quantityItemToTuple } from './utils/quantityItemToTuple';
import { validateQuantity } from './utils/validateQuantity';

export enum StandardDeviationType {
  POPULATION,
  SAMPLE,
}

// https://www.mathsisfun.com/data/standard-deviation.html
export const std = (
  items: (QuantityObject<number> | QuantityTuple<number>)[],
  type = StandardDeviationType.POPULATION
): number => {
  const tuples = items.map(quantityItemToTuple);
  validateQuantity(tuples); // if its not valid, then it will throw an Error

  const meanValue = mean(items);

  const totalQuantity = tuples.reduce((acc, curr) => acc + curr[1], 0);

  let deviationsSum = 0;

  tuples.forEach((tuple) => {
    const [value, quantity] = tuple;

    deviationsSum += (value - meanValue) ** 2 * quantity;
  });

  if (type === StandardDeviationType.SAMPLE && totalQuantity < 2) {
    throw new Error('Total quantity should be not less than 2');
  }

  const variance =
    deviationsSum / (totalQuantity - (type === StandardDeviationType.SAMPLE ? 1 : 0));

  return Math.sqrt(variance);
};

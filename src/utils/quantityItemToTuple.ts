import { Quantity, QuantityObject, QuantityTuple } from '../types';

export const quantityItemToTuple = <Value>(
  item: QuantityObject<Value> | QuantityTuple<Value>
): [Value, Quantity] => {
  if (Array.isArray(item)) return [item[0], item[1] ?? 1];

  return [item.value, item.quantity ?? 1];
};

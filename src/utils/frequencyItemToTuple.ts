import { Frequency, FrequencyObject, FrequencyTuple } from '../types';

export const frequencyItemToTuple = <Value>(
  item: FrequencyObject<Value> | FrequencyTuple<Value>
): [Value, Frequency] => {
  if (Array.isArray(item)) return [item[0], item[1] ?? 1];

  return [item.value, item.frequency ?? 1];
};

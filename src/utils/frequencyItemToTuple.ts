import { Frequency, FrequencyObject, Item } from '../types';

const isFrequencyObject = (
  item: FrequencyObject<unknown> | unknown
): item is FrequencyObject<unknown> => {
  return typeof item === 'object' && item !== null && 'value' in item;
};

export const frequencyItemToTuple = <Value>(item: Item<Value>): [Value, Frequency] => {
  if (Array.isArray(item)) return [item[0], item[1] ?? 1];

  if (isFrequencyObject(item)) {
    return [item.value, item.frequency ?? 1];
  }

  return [item, 1];
};

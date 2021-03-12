export interface IFrequencyItem {
  value: unknown;
  frequency?: number;
}

export const arrayFromFrequency = <T extends IFrequencyItem>(items: T[]): T['value'][] => {
  const result: T['value'][] = [];

  items.forEach((item) => {
    const { frequency = 1, value } = item;

    const valuesArray = new Array(frequency).fill(value);
    result.push(...valuesArray);
  });

  return result;
};

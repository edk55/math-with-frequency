export interface IQuantityItem {
  value: unknown;
  quantity?: number;
}

export const arrayByQuantity = <T extends IQuantityItem>(items: T[]): T['value'][] => {
  const result: T['value'][] = [];

  items.forEach((item) => {
    const { quantity = 1, value } = item;

    const valuesArray = new Array(quantity).fill(value);
    result.push(...valuesArray);
  });

  return result;
};

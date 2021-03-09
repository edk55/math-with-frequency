export type Quantity = number;

export type QuantityObject<Value> = { value: Value; quantity?: Quantity };
export type QuantityTuple<Value> = [Value] | [Value, Quantity];

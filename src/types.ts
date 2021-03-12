export type Frequency = number;

export type FrequencyObject<Value> = { value: Value; frequency?: Frequency };
export type FrequencyTuple<Value> = [Value] | [Value, Frequency];

export type Item<Value> = Value | FrequencyObject<Value> | FrequencyTuple<Value>;

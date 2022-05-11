export abstract class ValueObject<T> {
  protected value!: T;

  abstract equals(value: ValueObject<T>): boolean;
  protected abstract setValue(value: T): void;

  getValue(): T {
    return this.value;
  }
}

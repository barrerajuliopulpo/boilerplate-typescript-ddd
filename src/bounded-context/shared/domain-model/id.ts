import { UuidHelper } from "@boilerplate/core";

import { InvalidArgumentException } from "./invalid-argument.exception";
import { ValueObject } from "./value-object";

export class Id extends ValueObject<string> {
  private uuidHelper: UuidHelper;

  private constructor(value: string) {
    super();
    this.uuidHelper = UuidHelper.of();
    this.setValue(value);
  }

  static of(): Id;
  static of(value?: string): Id;

  static of(value?: string): Id {
    const id = value || UuidHelper.of().generate();
    return new Id(id);
  }

  equals(id: Id): boolean {
    return id.value === this.value;
  }

  toString(): string {
    return this.getValue();
  }

  protected setValue(value: string): void {
    if (this.uuidHelper.validate(value) === false) {
      throw new InvalidArgumentException("Invalid ID as uuid");
    }
    this.value = value;
  }
}

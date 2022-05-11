import { AggregateRoot } from "bc/shared/domain-model/aggregate-root";
import { InvalidArgumentException } from "bc/shared/domain-model/invalid-argument.exception";

export class Hello extends AggregateRoot {
  private name!: string;

  constructor(name: string) {
    super();
    this.setName(name);
  }

  getName(): string {
    return this.name;
  }

  private setName(name: string): void {
    if (!name || name.length < 2) {
      throw new InvalidArgumentException("Invalid name");
    }
    this.name = name;
  }
}

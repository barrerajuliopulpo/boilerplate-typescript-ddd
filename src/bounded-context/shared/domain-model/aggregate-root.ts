import { DomainEventPublisher } from "./domain-event-publisher";
import { IDomainEvent } from "./domain-event";
import { Id } from "./id";

export abstract class AggregateRoot {
  protected id!: Id;

  async publishEvent(event: IDomainEvent): Promise<void> {
    await DomainEventPublisher.of().publish(event);
  }

  getId(): Id {
    return this.id;
  }

  equals(entity: this): boolean {
    return this.getId().equals(entity.getId());
  }

  toString(): string {
    return this.getId().toString();
  }

  protected setId(id: Id): void {
    this.id = id;
  }
}

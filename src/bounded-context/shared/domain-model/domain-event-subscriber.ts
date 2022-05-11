import { IDomainEvent } from "./domain-event";

export interface IDomainEventSubscriber {
  handle(event: IDomainEvent): Promise<void>;
  isSubscribedTo(event: IDomainEvent): boolean;
}

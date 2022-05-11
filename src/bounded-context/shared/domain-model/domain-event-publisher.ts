import { IDomainEvent } from "./domain-event";
import { IDomainEventSubscriber } from "./domain-event-subscriber";

export class DomainEventPublisher {
  private subscribers: IDomainEventSubscriber[];
  private static instance: DomainEventPublisher;

  private constructor() {
    this.subscribers = [];
  }

  static of(): DomainEventPublisher {
    if (!this.instance) {
      this.instance = new DomainEventPublisher();
    }
    return this.instance;
  }

  subscribe(...subscribers: IDomainEventSubscriber[]): void {
    this.subscribers.push(...subscribers);
  }

  reset(): DomainEventPublisher {
    this.subscribers = [];
    return this;
  }

  unsubscribe(id: number): void {
    this.subscribers.splice(id, 1);
  }

  async publish(event: IDomainEvent): Promise<void[]> {
    return Promise.all(
      this.subscribers
        .filter((subscriber) => subscriber.isSubscribedTo(event))
        .map((subscriber) => subscriber.handle(event))
    );
  }
}

import { Publisher, OrderCreatedEvent, Subjects } from '@ytics/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}

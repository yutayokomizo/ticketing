import { Subjects, Publisher, OrderCancelledEvent } from '@ytics/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}

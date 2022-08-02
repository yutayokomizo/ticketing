import { Publisher, Subjects, TicketUpdatedEvent } from '@ytics/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}

import { Publisher, Subjects, TicketCreatedEvent } from '@ytics/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}

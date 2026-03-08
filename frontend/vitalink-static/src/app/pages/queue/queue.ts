import { Component, Input } from '@angular/core';
import { messageCardStatusEnum } from '../../models/enums/messageCardStatus.enum';
import { IMessageCard } from '../../models/interfaces/messageCard.interface';
import { mockFinishedCard, mockInCallCard, mockInCallFranciscoCard, mockInCallMatheusCard, mockWaitingCard } from '../messages/mocks';
import { QueueColumn } from "./queue-column/queue-column";

@Component({
  selector: 'app-queue',
  imports: [QueueColumn],
  templateUrl: './queue.html',
  styleUrl: './queue.scss',
})
export class Queue {
 @Input() allCards: Record<messageCardStatusEnum, IMessageCard[]> = {
    "IN_CALL": [
      mockInCallCard,
      mockInCallMatheusCard,
      mockInCallFranciscoCard,
      mockInCallCard,
      mockInCallCard,
    ],
    "FINISHED": [
      mockFinishedCard,
      mockFinishedCard,
      mockFinishedCard,
      mockFinishedCard,
      mockFinishedCard,
    ],
    "WAITING_CALL": [
      mockWaitingCard,
      mockWaitingCard,
      mockWaitingCard,
      mockWaitingCard,
      mockWaitingCard,
    ],
    "FIRST_CONTACT": [
      mockWaitingCard,
      mockWaitingCard,
      mockWaitingCard,
      mockWaitingCard,
      mockWaitingCard,
    ]
  }

}

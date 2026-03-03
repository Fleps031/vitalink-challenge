import { Component, Input } from '@angular/core';
import { MessageList } from "./message-list/message-list";
import { IMessageCard } from '../../models/interfaces/messageCard.interface';
import { mockFinishedCard, mockInCallCard, mockWaitingCard } from './mocks';
import { messageCardStatusEnum } from '../../models/enums/messageCardStatus.enum';
import { MessageBoard } from "./message-board/message-board";
import { MessageService } from '../../services/message-service/message-service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-messages',
  imports: [MessageList, MessageBoard, AsyncPipe],
  templateUrl: './messages.html',
  styleUrl: './messages.scss',
})
export class Messages {

  @Input() messageList: Record<messageCardStatusEnum, IMessageCard[]> = {
    "IN_CALL": [
      mockInCallCard,
      mockInCallCard,
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
    "FIRST_CONTACT": []
  }

  selectedCard: IMessageCard;
  serverMessages$: Observable<any>

  constructor(private messageService: MessageService){
    
  }



  ngOnInit(){
    this.selectedCard = this.messageList.IN_CALL[0]
    this.messageService.getServerMessages();
    this.serverMessages$ = this.messageService.messages$
  }

  changeSelectedCard(card: IMessageCard){
    this.selectedCard = card
  }


}

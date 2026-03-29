import { Component, Input } from '@angular/core';
import { MessageList } from "./components/message-list/message-list";
import { IMessageCard } from '../../models/interfaces/messageCard.interface';
import { mockFinishedCard, mockInCallCard, mockInCallFranciscoCard, mockInCallMatheusCard, mockWaitingCard } from './mocks';
import { messageCardStatusEnum } from '../../models/enums/messageCardStatus.enum';
import { MessageBoard } from "./components/message-board/message-board";
import { MessageService } from '../../services/message-service/message-service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MessagePatientInfo } from "./components/message-patient-info/message-patient-info";

@Component({
  selector: 'app-messages',
  imports: [MessageList, MessageBoard, AsyncPipe, MessagePatientInfo],
  templateUrl: './messages.html',
  styleUrl: './messages.scss',
})
export class Messages {

  @Input() messageList: Record<messageCardStatusEnum, IMessageCard[]> = {
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
    console.log("change card")
    this.selectedCard = card
  }

  sendMessage(message: string){
    this.messageService.sendMessage(message, this.selectedCard.patient.phone);
  }

}

import { Component, Input } from '@angular/core';
import { MessageList } from "./components/message-list/message-list";
import { IMessageCard } from '../../models/interfaces/messageCard.interface';
import { getPatientCardsMock, mockFinishedCard, mockInCallCard, mockInCallFranciscoCard, mockInCallMatheusCard, mockWaitingCard } from './mocks';
import { messageCardStatusEnum } from '../../models/enums/messageCardStatus.enum';
import { MessageBoard } from "./components/message-board/message-board";
import { MessageService } from '../../services/message-service/message-service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { messageCardTypeEnum } from '../../models/enums/messageCardType.enum';

@Component({
  selector: 'app-messages',
  imports: [MessageList, MessageBoard, AsyncPipe],
  templateUrl: './messages.html',
  styleUrl: './messages.scss',
})
export class Messages {

  @Input() messageList: Record<messageCardStatusEnum, IMessageCard[]> = {
    "IN_CALL": getPatientCardsMock(messageCardStatusEnum.IN_CALL),
    "FINISHED": getPatientCardsMock(messageCardStatusEnum.FINISHED), 
    "WAITING_CALL": getPatientCardsMock(messageCardStatusEnum.WAITING_CALL),
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

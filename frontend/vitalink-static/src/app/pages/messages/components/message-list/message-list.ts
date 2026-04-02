import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMessageCard } from '../../../../models/interfaces/messageCard.interface';
import { MessageCard } from "../../../../components/message-card/message-card";

@Component({
  selector: 'app-message-list',
  imports: [MessageCard],
  templateUrl: './message-list.html',
  styleUrl: './message-list.scss',
})
export class MessageList {
  @Input() messageCards?: IMessageCard[]
  @Input() hasBorder: boolean;
  @Output() selectCard: EventEmitter<IMessageCard>
  @Input() selectedCard: IMessageCard;

  constructor(){
    this.selectCard = new EventEmitter<IMessageCard>();
  }

  onSelectCard(card: IMessageCard){
    this.selectCard.emit(card)
  }

  isSelected(card: IMessageCard): boolean{
    return this.selectedCard === card
  }
}

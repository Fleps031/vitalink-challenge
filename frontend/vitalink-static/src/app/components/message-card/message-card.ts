import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMessageCard } from '../../models/interfaces/messageCard.interface';
import { messageCardTypeLabelEnum } from '../../models/enums/messageCardType.enum';

@Component({
  selector: 'app-message-card',
  imports: [],
  templateUrl: './message-card.html',
  styleUrl: './message-card.scss',
})
export class MessageCard {
  @Input() cardInfo: IMessageCard;
  @Input() hasCallerInfo: boolean;
  @Input() selected: boolean;
  @Output() clickCard: EventEmitter<IMessageCard>;
  typeEnum = messageCardTypeLabelEnum;

  constructor(){
    this.clickCard = new EventEmitter<IMessageCard>();
  }

  onClickCard(): void{
    this.clickCard.emit(this.cardInfo)
  }
}

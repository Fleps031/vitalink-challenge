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

  get avatarSrc(): string {
    const seed = encodeURIComponent(
      this.cardInfo?.patient?.name || this.cardInfo?.patient?.phone || 'patient'
    );
    return `https://api.dicebear.com/6.x/pixel-art/svg?seed=${seed}&size=80`;
  }

  onClickCard(): void{
    this.clickCard.emit(this.cardInfo)
  }
}

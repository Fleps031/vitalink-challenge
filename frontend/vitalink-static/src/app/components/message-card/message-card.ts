import { Component, Input } from '@angular/core';
import { IMessageCard } from '../../models/interfaces/messageCard.interface';

@Component({
  selector: 'app-message-card',
  imports: [],
  templateUrl: './message-card.html',
  styleUrl: './message-card.scss',
})
export class MessageCard {
  @Input() cardInfo: IMessageCard;

}

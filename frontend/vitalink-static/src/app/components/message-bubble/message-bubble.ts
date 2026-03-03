import { Component, Input } from '@angular/core';
import { IMessage } from '../../models/interfaces/message.interface';

@Component({
  selector: 'app-message-bubble',
  imports: [],
  templateUrl: './message-bubble.html',
  styleUrl: './message-bubble.scss',
})
export class MessageBubble {
  @Input() message: IMessage
}

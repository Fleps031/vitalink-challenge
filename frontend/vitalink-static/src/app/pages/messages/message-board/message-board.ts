import { Component, Input } from '@angular/core';
import { IMessage } from '../../../models/interfaces/message.interface';
import { MessageBubble } from "../../../components/message-bubble/message-bubble";

@Component({
  selector: 'app-message-board',
  imports: [MessageBubble],
  templateUrl: './message-board.html',
  styleUrl: './message-board.scss',
})
export class MessageBoard {
  @Input() messages: IMessage[]
}

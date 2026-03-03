import { Component, Input, SimpleChanges } from '@angular/core';
import { IMessage } from '../../../models/interfaces/message.interface';
import { MessageBubble } from "../../../components/message-bubble/message-bubble";

@Component({
  selector: 'app-message-board',
  imports: [MessageBubble],
  templateUrl: './message-board.html',
  styleUrl: './message-board.scss',
})
export class MessageBoard {
  @Input() allMessages: Record<string,IMessage[]>
  @Input() selectedConversation: string;

  messages: IMessage[]

  ngOnChanges(changes: SimpleChanges){
    if(changes["allMessages"]){
      this.messages = this.allMessages[this.selectedConversation]
      console.log(this.selectedConversation)
      console.log(this.allMessages)
    }
  }
}

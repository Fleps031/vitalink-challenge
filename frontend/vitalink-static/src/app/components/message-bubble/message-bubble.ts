import { Component, Input } from '@angular/core';
import { IMessage, MessageTypeEnum } from '../../models/interfaces/message.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-message-bubble',
  imports: [DatePipe],
  templateUrl: './message-bubble.html',
  styleUrl: './message-bubble.scss',
})
export class MessageBubble {
  @Input() message: IMessage
  messageTypeEnum = MessageTypeEnum;

  bubbleClass: string = 'caller-bubble'
  dateClass: string = 'caller-date'

  ngOnInit(): void{
    if(this.message.type === MessageTypeEnum.PATIENT){
      this.bubbleClass = 'patient-bubble'
      this.dateClass = 'patient-date'
    }
  }
}

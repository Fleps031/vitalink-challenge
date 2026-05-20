import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageList } from "../../messages/components/message-list/message-list";
import { IMessageCard } from '../../../models/interfaces/messageCard.interface';
import { MessageCard } from "../../../components/message-card/message-card";

@Component({
  selector: 'app-queue-column',
  imports: [CommonModule, MessageList, MessageCard],
  templateUrl: './queue-column.html',
  styleUrl: './queue-column.scss',
})
export class QueueColumn {

  @Input() cards: IMessageCard[];
  @Input() label: string;

}

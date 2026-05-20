import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { messageCardStatusEnum } from '../../models/enums/messageCardStatus.enum';
import { IMessageCard } from '../../models/interfaces/messageCard.interface';
import { getPatientCardsMock, attendantNames } from '../messages/mocks';
import { QueueColumn } from './queue-column/queue-column';

@Component({
  selector: 'app-queue',
  imports: [CommonModule, QueueColumn, FormsModule],
  templateUrl: './queue.html',
  styleUrl: './queue.scss',
})
export class Queue implements OnInit {
  @Input() allCards: Record<messageCardStatusEnum, IMessageCard[]> = {
    IN_CALL: getPatientCardsMock(messageCardStatusEnum.IN_CALL),
    FINISHED: getPatientCardsMock(messageCardStatusEnum.FINISHED),
    WAITING_CALL: getPatientCardsMock(messageCardStatusEnum.WAITING_CALL),
    FIRST_CONTACT: getPatientCardsMock(messageCardStatusEnum.FIRST_CONTACT),
  };

  patientFilter: string = '';
  attendantFilter: string = 'Todos';
  attendantOptions: string[] = ['Todos'];
  filteredCards: Record<messageCardStatusEnum, IMessageCard[]> = { ...this.allCards };

  ngOnInit() {
    this.buildAttendantOptions();
    this.filterCards();
  }

  buildAttendantOptions() {
    const attendants = new Set<string>();
    Object.values(this.allCards).flat().forEach(card => {
      if (card.attendant?.trim()) {
        attendants.add(card.attendant.trim());
      }
    });

    this.attendantOptions = ['Todos', ...Array.from(attendants).sort()];
  }

  filterCards() {
    this.filteredCards = {} as Record<messageCardStatusEnum, IMessageCard[]>;
    for (const status in this.allCards) {
      this.filteredCards[status as messageCardStatusEnum] = this.allCards[status as messageCardStatusEnum].filter(card => {
        const matchesPatient =
          this.patientFilter === '' ||
          card.patient.name.toLowerCase().includes(this.patientFilter.toLowerCase());
        const matchesAttendant =
          this.attendantFilter === 'Todos' ||
          card.attendant?.toLowerCase().includes(this.attendantFilter.toLowerCase());
        return matchesPatient && matchesAttendant;
      });
    }
  }

  get totalCards() {
    return Object.values(this.filteredCards).reduce((sum, cards) => sum + cards.length, 0);
  }
}

import { Component, Input } from '@angular/core';
import { IPatient } from '../../../models/interfaces/patient.interface';

@Component({
  selector: 'app-message-patient-info',
  imports: [],
  templateUrl: './message-patient-info.html',
  styleUrl: './message-patient-info.scss',
})
export class MessagePatientInfo {
  @Input() patient: IPatient
}

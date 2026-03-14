import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagePatientInfo } from './message-patient-info';

describe('MessagePatientInfo', () => {
  let component: MessagePatientInfo;
  let fixture: ComponentFixture<MessagePatientInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessagePatientInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagePatientInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

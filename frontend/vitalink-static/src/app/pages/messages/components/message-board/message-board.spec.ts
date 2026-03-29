import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBoard } from './message-board';

describe('MessageBoard', () => {
  let component: MessageBoard;
  let fixture: ComponentFixture<MessageBoard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageBoard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageBoard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

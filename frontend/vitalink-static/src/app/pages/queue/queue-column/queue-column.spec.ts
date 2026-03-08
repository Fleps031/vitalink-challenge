import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueColumn } from './queue-column';

describe('QueueColumn', () => {
  let component: QueueColumn;
  let fixture: ComponentFixture<QueueColumn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueueColumn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueueColumn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

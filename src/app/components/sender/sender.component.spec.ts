import { CommunicationService } from '../../services/communication.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenderComponent } from './sender.component';

describe('SenderComponent', () => {
  let component: SenderComponent;
  let fixture: ComponentFixture<SenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SenderComponent
      ], providers: [
        CommunicationService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

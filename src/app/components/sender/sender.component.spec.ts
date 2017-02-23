import { HttpModule } from '@angular/http';
import { CommunicationService } from '../../services/communication.service';
import { ReceiverComponent } from '../receiver/receiver.component';
import { SenderComponent } from './sender.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('SenderComponent', () => {
  let component: SenderComponent;
  let fixture: ComponentFixture<SenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SenderComponent,
        ReceiverComponent
      ], imports: [
        HttpModule
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

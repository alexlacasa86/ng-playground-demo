import { HttpModule } from '@angular/http';
import { CommunicationService } from '../../services/communication.service';
import { OutputComponent } from './output.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('OutputComponent', () => {
  let component: OutputComponent;
  let fixture: ComponentFixture<OutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OutputComponent
      ], imports: [
        HttpModule
      ], providers: [
        CommunicationService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

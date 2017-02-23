import { CommunicationService } from '../../services/communication.service';
import { MaterialModule } from '@angular/material';
import { InputComponent } from '../input/input.component';
import { OutputComponent } from '../output/output.component';
import { InputOutputComponent } from './input-output.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

describe('InputOutputComponent', () => {
  let component: InputOutputComponent;
  let fixture: ComponentFixture<InputOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        InputComponent,
        OutputComponent,
        InputOutputComponent
      ], imports: [
        FormsModule,
        MaterialModule
      ], providers: [
        CommunicationService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { routes } from '../../app-routing.module';
import { InputOutputComponent } from '../input-output/input-output.component';
import { NoContentComponent } from '../no-content/no-content.component';
import { SenderComponent } from '../sender/sender.component';
import { RoutingComponent } from './routing.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('RoutingComponent', () => {
  let component: RoutingComponent;
  let fixture: ComponentFixture<RoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RoutingComponent,
        SenderComponent,
        NoContentComponent,
        InputOutputComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(routes)
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

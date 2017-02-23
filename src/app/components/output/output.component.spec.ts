import { AsyncTestCompleter } from '@angular/core/testing/async_test_completer';
import { BehaviorSubject, Subject, Observable } from 'rxjs/Rx';
import { HttpModule } from '@angular/http';
import { CommunicationService } from '../../services/communication.service';
import { OutputComponent } from './output.component';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';

describe('OutputComponent', () => {
  let component: OutputComponent;
  let fixture: ComponentFixture<OutputComponent>;
  let element: any;
  let obs1$: Subject<string>;
  let obs2$: Observable<string>;

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
    element = fixture.nativeElement;
  });

  it('should show the text provided (async)', async(() => {
    inject([AsyncTestCompleter], (async: AsyncTestCompleter) => {
      obs1$ = new Subject<string>();
      obs2$ = new BehaviorSubject('testing 2');

      component.valueSubject = obs1$;
      component.valueBehaviorSubject = obs2$;

      obs1$.next('testing 1');

      expect(element.querySelector('strong.sub').innerText).toBe('testing 1');
      expect(element.querySelector('strong.beh').innerText).toBe('testing 2');
      async.done();
    });
  }));
});

import { Observable } from 'rxjs/Rx';
import { CommunicationService } from '../../services/communication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  valueSubject: Observable<string>;
  valueBehaviorSubject: Observable<string>;

  constructor(public comm: CommunicationService) { }

  ngOnInit() {
    this.valueSubject = this.comm.commSubject;
    this.valueBehaviorSubject = this.comm.commBehaviorSubject;
  }
}

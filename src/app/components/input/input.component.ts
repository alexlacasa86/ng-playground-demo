import { CommunicationService } from '../../services/communication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  value: string;

  constructor(public comm: CommunicationService) { }

  ngOnInit() {
    this.value = 'Default value';
    this.comm.updateCommSubjects(this.value);
  }

  valueChanged(str) {
    this.comm.updateCommSubjects(str);
  }
}

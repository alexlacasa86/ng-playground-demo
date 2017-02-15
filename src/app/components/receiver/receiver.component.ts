import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.scss']
})
export class ReceiverComponent implements OnChanges {
  @Input() data: any;

  ngOnChanges(changes) {
    const dataValue = changes['data'];
    if (dataValue && dataValue.currentValue) {
      dataValue.currentValue.extraData = 'abc';
    }
  }
}

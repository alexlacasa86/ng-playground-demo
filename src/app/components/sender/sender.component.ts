import { CommunicationService } from '../../services/communication.service';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss']
})
export class SenderComponent implements OnInit {

  categories: Observable<any>;

  constructor(public comm: CommunicationService) { }

  ngOnInit() {
    this.categories = this.comm.getCategories('Valencia');

    setTimeout(() => {
      this.categories = this.comm.getCategories('Teruel');
    }, 5000);
  }
}

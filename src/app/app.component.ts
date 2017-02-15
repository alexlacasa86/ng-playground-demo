import { Observable } from 'rxjs/Rx';
import { CommunicationService } from './services/communication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  categories: Observable<any>;

  constructor(public comm: CommunicationService) { }

  ngOnInit() {
    this.categories = this.comm.getCategories('Valencia');

    setTimeout(() => {
      this.categories = this.comm.getCategories('Teruel');
    }, 5000);

  }
}

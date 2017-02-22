import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { CommunicationService } from './services/communication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _router: Router) { }

  goTo(dest: string) {
    this._router.navigate([`/${dest}`]);
  }
}

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BehaviorSubject, Subject, Observable } from 'rxjs/Rx';

@Injectable()
export class CommunicationService {

  private _commSubject: Subject<string>;

  get commSubject(): Subject<string> {
    return this._commSubject;
  }

  private _commBehaviorSubject: BehaviorSubject<string>;

  get commBehaviorSubject(): BehaviorSubject<string> {
    return this._commBehaviorSubject;
  }

  constructor(public http: Http) {
    this._commSubject = new Subject<string>();
    this._commBehaviorSubject = new BehaviorSubject<string>('');
  }

  updateCommSubjects(str: string) {
    this._commSubject.next(str);
    this._commBehaviorSubject.next(str);
  }

  getCategories(location: string): Observable<any> {
    const URL = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${location}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;
    return this.http.get(URL)
      .map((res: Response) => res.json());
  }
}

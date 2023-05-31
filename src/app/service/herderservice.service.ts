import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HerderserviceService {
  constructor() {}

  selectedLang = new BehaviorSubject('en');

  pageName = new BehaviorSubject('de');
}

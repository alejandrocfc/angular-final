import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SetNumberService {

  private number = new BehaviorSubject<number>(0);

  setNumber(item) {
    this.number.next(item);
  }

  getNumber() {
    return this.number.asObservable();
  }
}

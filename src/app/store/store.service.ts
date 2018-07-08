import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/pluck";

export interface State {
  isOnline: true,
  catalog: any,
  branch: any
}

const state: State = {
  isOnline: true,
  catalog: [],
  branch: []
}

@Injectable({
  providedIn: 'root'
})
export class StoreService { 
  //category
  myMethod$: Observable<any>;
  private myMethodSubject = new BehaviorSubject<State>(state);

  //subcategory
  my_Method$: Observable<any>;
  private my_MethodSubject = new BehaviorSubject<State>(state);

  constructor() {
    this.myMethod$ = this.myMethodSubject.asObservable();
    this.my_Method$ = this.my_MethodSubject.asObservable();
  }

  myMethod(data) {
    return this.myMethodSubject.next(data); // i have a data and return it so that other subscribers can use it
  }

  my_Method(data) {
    return this.my_MethodSubject.next(data);  // i have a data and return it so that other subscribers can use it
  }
}

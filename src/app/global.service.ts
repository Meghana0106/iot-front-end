import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * @description
 * @class
 */
@Injectable()
export class GlobalService {
  private isLoggedIn = new BehaviorSubject<boolean>(false);

  

  constructor() {
    //this.isLoggedIn.next(false);
    //this.isLoggedIn = new BehaviorSubject<boolean>(false);
  }
  updatedAuthState(flag: boolean){
    this.isLoggedIn.next(flag);
  }
  getIsLgogedInObs(): Observable<boolean> {
    return this.isLoggedIn.asObservable();
  }
}

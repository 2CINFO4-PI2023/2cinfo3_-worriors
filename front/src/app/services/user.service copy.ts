import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<any>(null);
  public user$ = this.userSubject.asObservable();

  constructor() {}

  setUser(user: any) {
    this.userSubject.next(user);
  }

  getUser() {
    return this.userSubject.value;
  }

  clearUser() {
    this.userSubject.next(null);
  }
}

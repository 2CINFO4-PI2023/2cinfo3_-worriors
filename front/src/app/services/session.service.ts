// session.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private readonly sessionStorageKey = 'session';

  constructor() {}

  setSessionData(data: any) {
    sessionStorage.setItem(this.sessionStorageKey, JSON.stringify(data));
  }

  getSessionData(): any {
    const sessionData = sessionStorage.getItem(this.sessionStorageKey);
    return sessionData ? JSON.parse(sessionData) : null;
  }

  clearSessionData() {
    sessionStorage.removeItem(this.sessionStorageKey);
  }
}

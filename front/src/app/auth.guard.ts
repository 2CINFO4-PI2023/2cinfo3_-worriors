// auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SessionService } from './services/session.service'; // Update the path to your SessionService

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private sessionService: SessionService, private router: Router) {}

  canActivate(): boolean {
    const sessionData = this.sessionService.getSessionData();

    if (sessionData && sessionData.passport && sessionData.passport.user) {
      // User is logged in (session data exists)
      // Redirect to /books
      this.router.navigate(['/books']);
      return false;
    } else {
      return true;
    }
  }
}

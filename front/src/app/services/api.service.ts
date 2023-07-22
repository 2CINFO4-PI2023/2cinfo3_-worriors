import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000'; // Update the URL to your Node server

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    return this.http.post(`${this.apiUrl}/auth/login`, loginData);
  }

  signin(userData: any): Observable<any> {
    console.log(userData);
    return this.http.post(`${this.apiUrl}/users/register`, userData);
  }

  getUsers(): Observable<User[]> {
    const url = `${this.apiUrl}/users/all`;
    return this.http.get<User[]>(url);
  }
}

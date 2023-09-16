import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GlobalService {

    isAdmin=true;
    constructor(private http: HttpClient) { }


    checkAdmin(){
        return this.isAdmin;
    }


    getAllUsers() {
        return this.http.get<any[]>(`${environment.apiUrl}/users`);
    }


    getUserById(id: string) {
        return this.http.get<any>(`${environment.apiUrl}/users/${id}`);
    }

    getAllQuestions() {
        return this.http.get<any[]>(`${environment.apiUrl}/questions`);
    }


    getQuestionById(id: string) {
        return this.http.get<any>(`${environment.apiUrl}/questionss/${id}`);
    }
    
    deleteQuestion(id: string) {
        return this.http.delete<any>(`${environment.apiUrl}/question/${id}`);
    }
    deleteResponse(id: string) {
        return this.http.delete<any>(`${environment.apiUrl}/responses/${id}`);
    }

    postQuestion(form: any) {
        return this.http.post<any>(`${environment.apiUrl}/questions/`,form);
    }

    updateQuestion(id:string,form: any) {
        return this.http.put<any>(`${environment.apiUrl}/questions/${id}`,form);
    }
    
    solveQuestion(id:string,form: any) {
        return this.http.put<any>(`${environment.apiUrl}/solve-question/${id}`,form);
    }
    sendEmail(form: any) {
        return this.http.post<any>(`${environment.Url}/email/`,form);
    }
    postResponse(form: any) {
        return this.http.post<any>(`${environment.apiUrl}/responses/`,form);
    }

    getAllResponses() {
        return this.http.get<any[]>(`${environment.apiUrl}/responses`);
    }


    getResponseByQuestion(id: string) {
        return this.http.get<any>(`${environment.apiUrl}/questionss/${id}`);
    }


    //STATS
    getQuestionsCount(){
        return this.http.get<any>(`${environment.apiUrl}/questions/count`);
    }
    getUsersCount(){
        return this.http.get<any>(`${environment.apiUrl}/users/count`);
    }
    getResponsesCount(){
        return this.http.get<any>(`${environment.apiUrl}/responses/count`);
    }



}

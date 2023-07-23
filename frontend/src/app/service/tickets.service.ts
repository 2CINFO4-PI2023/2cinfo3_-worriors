import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable ,forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn:"root"},
    )
export class TicketsService{
    private statsUrl = 'http://localhost:3000/tickets/statistics/'; // Replace with your actual backend API URL

    constructor(private http : HttpClient){

    }
    createTicket(tickets : {title:string, user : string, description:string,type : string}){
        console.log(tickets);
        this.http.post("http://localhost:3000/tickets/",tickets).subscribe((res)=>{
        console.log(res);
        });
    }
    
    getTicketStatistics(): Observable<any> {
        const url = `${this.statsUrl}`;
        return this.http.get<any>(url);
      }


    getTicketTypeData(ticketTypeId: string): Observable<any> {
        const ticketTypeUrl = `http://localhost:3000/tickets/types/${ticketTypeId}`;
        return this.http.get<any>(ticketTypeUrl);
      }



    getTicket(ticketId: string): Observable<any> {
    const ticketUrl = `http://localhost:3000/tickets/${ticketId}`;
    return this.http.get<any>(ticketUrl).pipe(
        map((ticket: any) => {
        const ticketTypeId = ticket?.typeId;

        return forkJoin({
            ticket,
            ticketType: this.getTicketType(ticketTypeId)
        });
        })
    );
    }
    
    getTicketType(ticketTypeId: string): Observable<any> {
    const ticketTypeUrl = `http://localhost:3000/tickets/types/${ticketTypeId}`;
    return this.http.get<any>(ticketTypeUrl);
    }
    
    updateTicket(ticketId: string, updatedTicket: any): Observable<any> {
        const url = `http://localhost:3000/tickets/${ticketId}`;
        return this.http.put(url, updatedTicket);
      }

    deleteTicket(){

    }
}
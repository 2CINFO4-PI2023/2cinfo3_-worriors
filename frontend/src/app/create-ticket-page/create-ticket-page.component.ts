import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TicketsService } from '../service/tickets.service';

@Component({
  selector: 'app-create-ticket-page',
  templateUrl: './create-ticket-page.component.html',
  styleUrls: ['./create-ticket-page.component.css']
})
export class CreateTicketPageComponent {
  title = 'AngularHttpRequest';

  constructor (private http : HttpClient, private ticketService : TicketsService){
  }
  
  onTicketCreate(tickets : {title:string, user : string, description:string,type : string}){
    this.ticketService.createTicket(tickets);
  }

}

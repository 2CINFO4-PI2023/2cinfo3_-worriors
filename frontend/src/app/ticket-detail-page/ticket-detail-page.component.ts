import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TicketsService } from '../service/tickets.service';
@Component({
  selector: 'app-ticket-detail-page',
  templateUrl: './ticket-detail-page.component.html',
  styleUrls: ['./ticket-detail-page.component.css']
})
export class TicketDetailPageComponent {
  id: any ;
  public ticket: any;
  ticketType: any;



  constructor(
    private route:ActivatedRoute,
    private http: HttpClient,
    private ticketService: TicketsService
  ) {}

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.getOne();
    
  }


  getOne (){
  this.http.get<any>('http://localhost:3000/tickets/'+this.id).subscribe((ticket) => {
  // console.log(ticket)
  this.ticket = ticket;
  // this.getJsonValue = ticket;
  const ticketTypeId = ticket?.typeId;
  this.ticketService.getTicketType(ticketTypeId).subscribe(data => {
  this.ticketType = data.title;
      })
  }
  
  )
}

updateTicket() {
  // Modify the ticket data you want to update (e.g., this.ticket.title or any other property)
  const updatedTicketData = {
    title: 'Updated Ticket Title',
    // Add other properties you want to update
  };

  this.ticketService.updateTicket(this.ticket._id, updatedTicketData).subscribe(updatedTicket => {
    // If needed, you can update the local ticket object with the updatedTicket data
    this.ticket = updatedTicket;
  });
}


}
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularHttpRequest';
  constructor(private http : HttpClient) {

  }

  // ngOnInit(){
  //   this
  // }
  // onDeleteTicket(id:string){
  //   this.http.delete("http://localhost:3000/tickets/"+id).subscribe();
  // }
}


// private fetchTickets(){

// }

// onEditClicked(id :string){
  
// }
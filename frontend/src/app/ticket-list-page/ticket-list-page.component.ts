// ticket-list-page.component.ts
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket-list-page',
  templateUrl: './ticket-list-page.component.html',
  styleUrls: ['./ticket-list-page.component.css']
})
export class TicketListPageComponent {

  public getJsonValue: any;
  public displayColumn: string[] = ['Number','Title','status','Actions']
  public dataSource: any = [];

  constructor(private http: HttpClient){}
  ngOnInit():void{
    this.getMethod();
  }
  public getMethod(){
    this.http.get('http://localhost:3000/tickets').subscribe((data) => {
      console.table(data);
      this.getJsonValue = data;
      this.dataSource = data;
    })
    
  }
    onDeleteTicket(id:string){
    this.http.delete("http://localhost:3000/tickets/"+id).subscribe();
  }

  onEditClicked(id: string){    
  }

  

}




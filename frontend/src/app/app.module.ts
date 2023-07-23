import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module'; // Import the AppRoutingModule
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { TicketDetailPageComponent } from './ticket-detail-page/ticket-detail-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';

import { TicketListPageComponent } from './ticket-list-page/ticket-list-page.component';
import { CreateTicketPageComponent } from './create-ticket-page/create-ticket-page.component';
import { TicketsStatisticsPageComponent } from './tickets-statistics-page/tickets-statistics-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// const routes: Routes = [
//   { path: 'ticket/:id', component: TicketDetailPageComponent },
// ];
const routes: Routes = [
  { path: '', redirectTo: '/ticket-list', pathMatch: 'full' }, 
  { path: 'ticket-list', component: TicketListPageComponent }, 
  { path: 'ticket/:id', component: TicketDetailPageComponent }, 
  { path: 'create-ticket', component: CreateTicketPageComponent }, 
  { path: 'tickets-statistics', component: TicketsStatisticsPageComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    TicketDetailPageComponent,
    TicketListPageComponent,
    CreateTicketPageComponent,
    TicketsStatisticsPageComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ManageBooksComponent } from './manage-books/manage-books.component';
import { ViewBookComponent } from './view-book/view-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    CreateBookComponent,
    FavoritesComponent,
    EditBookComponent,
    ManageBooksComponent,
    ViewBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

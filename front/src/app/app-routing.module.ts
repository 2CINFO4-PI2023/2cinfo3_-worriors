import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { PurchasedComponent } from './purchased/purchased.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component'; // Add this line
import { ManageBooksComponent } from './manage-books/manage-books.component';
import { AuthGuard } from './auth.guard';

import { ViewBookComponent } from './view-book/view-book.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'signin', component: SigninComponent, canActivate: [AuthGuard] },
  { path: 'books', component: BooksComponent },
  { path: 'books/:id', component: ViewBookComponent },

  { path: 'favorites', component: FavoritesComponent },
  { path: 'purchased', component: PurchasedComponent },
  { path: 'cart', component: CartComponent },
  { path: 'orders', component: OrdersComponent }, // Add this line
  { path: 'manage-books', component: ManageBooksComponent },
  { path: 'manage-orders', component: ManageOrdersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

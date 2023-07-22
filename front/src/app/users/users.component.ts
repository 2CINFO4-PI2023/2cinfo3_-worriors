import { Component } from '@angular/core';
import { User } from '../models/user';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users: User[] = [];
  loading: boolean = true;
  constructor(private apiService: ApiService) {}
  ngOnInit() {
    this.fetchUsers();
  }
  fetchUsers() {
    this.apiService.getUsers().subscribe(
      (users: User[]) => {
        console.log(users);
        this.users = users;
        this.loading = false;
      },
      (error: any) => {
        console.log(error);
        this.loading = false;
      }
    );
  }
  editUser(user: User) {}
  deleteUser(user: User) {}
}

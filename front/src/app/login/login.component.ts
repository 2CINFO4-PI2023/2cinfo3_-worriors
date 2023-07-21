import { Component } from '@angular/core';
import { ApiService } from '../services/api.service'; // Update the path to your ApiService
import { UserService } from '../services/user.Service'; // Update the path to your UserService
import { SessionService } from '../services/session.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  submitted: boolean = false;
  errors: any = {};

  constructor(
    private apiService: ApiService,
    private userService: UserService,
    private sessionService: SessionService
  ) {} // Inject the ApiService

  onSubmit() {
    this.submitted = true;
    this.errors = {};

    if (this.isValidForm()) {
      // Perform login API request
      this.apiService.login(this.email, this.password).subscribe(
        (response) => {
          // Handle successful login response
          this.sessionService.setSessionData({
            passport: { user: response.user },
          });
          this.userService.setUser(response.user);
          console.log('Login successful:', {
            response,
            user: this.userService.getUser(),
          });
          // You can perform additional actions here, such as storing authentication tokens, etc.
        },
        (error) => {
          // Handle login error
          console.error('Login failed:', error);
          if (error.status === 401) {
            this.errors.login =
              'Invalid credentials. Please check your email and password.';
          } else {
            this.errors.general = 'An error occurred. Please try again later.';
          }
        }
      );
    }
  }

  isValidForm(): boolean {
    let isValid = true;
    this.errors = {};

    // Validation for required fields
    if (!this.email) {
      this.errors.email = 'Email is required';
      isValid = false;
    }
    if (!this.password) {
      this.errors.password = 'Password is required';
      isValid = false;
    }

    return isValid;
  }
}

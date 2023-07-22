import { Component } from '@angular/core';
import { ApiService } from '../services/api.service'; // Update the path to your ApiService
import { UserService } from '../services/user.Service'; // Update the path to your UserService
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router'; // Import the Router module
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  firstName: string = '';
  lastName: string = '';
  birthday: string = '';
  email: string = '';
  password: string = '';
  submitted: boolean = false;
  errors: any = {};
  signinError: boolean = false;

  constructor(
    private apiService: ApiService,
    private userService: UserService,
    private router: Router,
    private sessionService: SessionService
  ) {}

  onSubmit() {
    this.submitted = true;
    this.errors = {};

    if (this.isValidForm()) {
      // Perform sign-in API request
      const user = {
        firstName: this.firstName,
        lastName: this.lastName,
        birthday: this.birthday,
        email: this.email,
        password: this.password,
      };

      this.apiService.signin(user).subscribe(
        (response) => {
          console.log(response);
          // Handle successful sign-in response
          this.signinError = false;
          this.userService.setUser(response.user);
          this.sessionService.setSessionData({
            passport: { user: response },
          });

          console.log('Sign-in successful:', {
            response,
            user: this.userService.getUser(),
          });

          this.router.navigate(['/books']);
          // You can perform additional actions here, such as displaying a success message or navigating to another page.
        },
        (error) => {
          // Handle sign-in error
          this.signinError = true;
          console.error('Sign-in failed:', error);
          // Display the error message to the user
          // You can also set a general error message if needed, such as this.errors.general = 'An error occurred.'
        }
      );
    }
  }

  isValidForm(): boolean {
    let isValid = true;

    // Validation for required fields
    if (!this.firstName) {
      this.errors.firstName = 'First Name is required';
      isValid = false;
    }
    if (!this.lastName) {
      this.errors.lastName = 'Last Name is required';
      isValid = false;
    }
    if (!this.birthday) {
      this.errors.birthday = 'Birthday is required';
      isValid = false;
    }
    if (!this.email) {
      this.errors.email = 'Email is required';
      isValid = false;
    } else if (!this.validateEmail(this.email)) {
      this.errors.email = 'Invalid email format';
      isValid = false;
    }
    if (!this.password) {
      this.errors.password = 'Password is required';
      isValid = false;
    } else if (this.password.length < 6) {
      this.errors.password = 'Password must be at least 6 characters long';
      isValid = false;
    } else if (!/[A-Z]/.test(this.password) || !/[a-z]/.test(this.password)) {
      this.errors.password =
        'Password must contain at least one uppercase and one lowercase letter';
      isValid = false;
    }

    return isValid;
  }

  validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }
}

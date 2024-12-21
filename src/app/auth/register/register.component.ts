import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  constructor(private router: Router, private toastrService: NbToastrService) {}

  register(): void {
    if (this.user.password !== this.user.confirmPassword) {
      this.toastrService.danger('Passwords do not match!', 'Error');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Check if email already exists
    const existingUser = users.find((u: any) => u.email === this.user.email);
    if (existingUser) {
      this.toastrService.warning('Email is already registered.', 'Warning');
      return;
    }

    // Save the new user
    users.push({
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      password: this.user.password,
    });
    localStorage.setItem('users', JSON.stringify(users));

    
    this.toastrService.success(
      'Registration successful! Please login.',
      'Success',
      {
        duration: 5000, // 5 seconds
        destroyByClick: true, // Destroy the toast if clicked
      }
    );
    this.router.navigate(['/auth/login']); // Redirect to login page
  }
}

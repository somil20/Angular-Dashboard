import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private router: Router, private toastrService: NbToastrService) {}

  // Logout method with toast message
  logout(): void {
    // Remove user from local storage
    localStorage.removeItem('user');
    // Show logout success message
    this.toastrService.show('You have been logged out.', 'Logout', { status: 'info' });
    // Redirect to the login page
    this.router.navigate(['/auth/login']);
}
}

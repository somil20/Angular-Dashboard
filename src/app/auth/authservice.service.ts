import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Makes the service available globally
})
export class AuthService {
  private loggedInUserKey = 'loggedInUser';

  constructor() {}

  login(email: string, password: string): { success: boolean; message: string } {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const existingUser = users.find((u: any) => u.email === email);

    if (!existingUser) {
      return { success: false, message: 'User does not exist. Please register first.' };
    }

    if (existingUser.password === password) {
      localStorage.setItem(this.loggedInUserKey, JSON.stringify(existingUser));
      return { success: true, message: 'Login successful!' };
    }

    return { success: false, message: 'Invalid email or password.' };
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.loggedInUserKey);
  }

  logout(): void {
    localStorage.removeItem(this.loggedInUserKey);
  }
}

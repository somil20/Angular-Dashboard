import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { AuthService } from '../authservice.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class NgxLoginComponent {
  user = {
    email: '',
    password: '',
  };

  constructor(
    private router: Router,
    private toastrService: NbToastrService,
    private authService: AuthService
  ) {}

  login(): void {
    const { email, password } = this.user;
    const result = this.authService.login(email, password);

    if (result.success) {
      this.toastrService.success(result.message, 'Success');
      this.router.navigate(['/pages']); // Redirect to dashboard
    } else {
      this.toastrService.warning(result.message, 'Warning');
    }
  }
}

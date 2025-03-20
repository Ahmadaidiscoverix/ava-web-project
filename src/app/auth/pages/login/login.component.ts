import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async onLogin() {
    if (this.loginForm.valid) {
      try {
        console.log('Sending request with:', this.loginForm.value);
        const response = await this.authService.login(this.loginForm.value);
        console.log('Login successful:', response);
        
        localStorage.setItem('token', response.token);
        this.router.navigate(['/dashboard']);
      } catch (error: any) {
        console.error('Login failed:', error);
        this.errorMessage = error.message || 'Invalid credentials';
      }
    }
  }
}

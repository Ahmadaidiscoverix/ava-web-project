import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  hidePassword = true;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (res) => {
          console.log('Login Successful', res);
          localStorage.setItem('accessToken', res.data.accessToken);
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          console.error('Login Failed', error);
          this.errorMessage = error?.error?.message || 'Invalid email or password';
        },
      });
    }
  }

  // onSubmit() {
  //   if (this.loginForm.valid) {
  //     this.authService.login(this.loginForm.value).subscribe({
  //       next: (response) => {
  //         console.log('Login Successful', response);
  
  //         // Store token
  //         localStorage.setItem('accessToken', response.data.accessToken);
  //         console.log('Stored Token:', localStorage.getItem('accessToken')); // Debugging
  
  //         // Redirect to Dashboard
  //         this.router.navigate(['/dashboard']);
  //       },
  //       error: (error) => {
  //         console.error('Login Failed', error);
  //         this.errorMessage = error?.error?.message || 'Invalid email or password';
  //       },
  //     });
  //   }
  // }
}

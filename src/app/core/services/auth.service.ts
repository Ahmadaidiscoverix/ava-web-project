import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://api.xtractsol.com/auth';

  constructor() {}

  async login(userData: { email: string; password: string }): Promise<any> {
    try {
      const response = await fetch(`${this.apiUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'  // Ensure correct response type
        },
        body: JSON.stringify(userData)
      });

      // Handle invalid response
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Invalid login credentials');
      }

      return await response.json();
    } catch (error) {
      console.error('Login Error:', error);
      throw error;
    }
  }
}

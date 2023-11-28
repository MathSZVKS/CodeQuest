import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersaveService {
  private savedUsername: string | null = null;

  constructor() {}

  setUsername(username: string): void {
    this.savedUsername = username;
  }

  getUsername(): string | null {
    return this.savedUsername;
  }
}

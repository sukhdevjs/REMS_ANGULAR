import { Injectable } from '@angular/core';

const USER = "user";
const TOKEN = "token";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  static saveToken(token: string): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.removeItem(TOKEN);
      window.localStorage.setItem(TOKEN, token);
    }
  }

  static saveUser(user: any): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.removeItem(USER);
      window.localStorage.setItem(USER, JSON.stringify(user));
    }
  }

  static getUser() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const user = window.localStorage.getItem(USER);
      return user ? JSON.parse(user) : null;
    }
    return null;
  }

  static getToken(): string | null {
    if (typeof window !== 'undefined' && window.localStorage) {
      return window.localStorage.getItem(TOKEN);
    }
    return null;
  }

  static getUserRole(): string {
    const user = this.getUser();
    return user ? user.role : ''; 
    // Return empty string if user is not
  }

  static isAdminLoggedIn(): boolean {
    if (this.getToken() === null) return false;
    const role: string = this.getUserRole();
    return role === "ADMIN";
  }

  static isCustomerLoggedIn(): boolean {
    if (this.getToken() === null) return false;
    const role: string = this.getUserRole();
    return role === "CUSTOMER";
  }

  static logOut():void{
    window.localStorage.removeItem(USER);
    window.localStorage.removeItem(TOKEN);
  }
}

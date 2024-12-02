import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false); 
  
  private userData: any = null;

  constructor() {}

  
  login(email: string, password: string): boolean {
    
    if (email === 'test@example.com' && password === 'password') {
      this.userData = { email }; 
      this.isLoggedInSubject.next(true);
      return true;
    }
    return false;
  }

  
  logout(): void {
    this.userData = null;
    this.isLoggedInSubject.next(false);
  }


  isLoggedIn(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  
  getUserData(): any {
    return this.userData;
  }
}

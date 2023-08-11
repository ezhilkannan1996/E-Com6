import { Injectable } from '@angular/core';
import { users } from '../interface/data-type';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  private loggedInUserSubject: BehaviorSubject<users | null> = new BehaviorSubject<users | null>(null);
  public loggedInUser$: Observable<users | null> = this.loggedInUserSubject.asObservable();

  private user: users[] = [{ id: 1, name: 'Test User1', username: 'Test1', password: 'Test1', phonenumber: 9543645878, email: 'test1@gmail.com', image:'/assets/images/facebook-user-icon-17.jpg', role: 'Admin'  },
  { id: 2, name: 'Test User2', username: 'Test2', password: 'Test2', phonenumber: 7877784844, email: 'test2@gmail.com', image:'/assets/images/facebook-user-icon-17.jpg', role: 'User' },
  { id: 2, name: 'Test User3', username: 'Test3', password: 'Test3', phonenumber: 9597815524, email: 'test3@gmail.com', image:'/assets/images/facebook-user-icon-17.jpg', role: 'User' }];

  private loggedInUser: users | undefined;
  

  constructor(){
    
  }

  signUp(user: any): void {
    this.user.push(user);
  }

  logIn(username: string, password: string): boolean {
    const user = this.user.find(u => u.username === username && u.password === password);
    if (user) {
      this.loggedInUserSubject.next(user);
      return true;
    }
    return false;
  }

  getLoggedInUser(): users | undefined {
    return this.loggedInUser;
  }



}

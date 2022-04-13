import { map } from 'rxjs/operators';
import { UserProfile } from './../interface/userProfile';
import { UserAdminProfile } from './../interface/userAdminProfile';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateUser } from '../interface/createUser';
import { UpdateProfile } from '../interface/updateProfile';
import { User } from '../interface/user';
import { LoginUser } from '../interface/loginUser';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // eslint-disable-next-line @typescript-eslint/naming-convention
  private URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  register(userForm: CreateUser): Observable<any> {
    return this.http.post<any>(`${this.URL}/create`, userForm);
  }

  login(userForm: LoginUser): Observable<User> {
    return this.http.post<User>(`${this.URL}/login`, userForm).pipe(
      map(user => {
        localStorage.setItem('user', JSON.stringify(user));
        return user;
      })
    );
  }

  findUserProfile(id: string): Observable<UserAdminProfile | UserProfile> {
    return this.http.get<UserAdminProfile | UserProfile>(`${this.URL}/userAdminProfile`);
  }

  updateProfile(information: UpdateProfile): Observable<any> {
    return this.http.post<any>(`${this.URL}/update`, information);
  }

  getUserInfo(): User {
    return JSON.parse(localStorage.getItem('user'));
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateUser } from '../interface/createUser';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // eslint-disable-next-line @typescript-eslint/naming-convention
  private URL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  register(userForm: CreateUser): void {
    this.http.post<void>(`${this.URL}/create`, userForm);
  }
}

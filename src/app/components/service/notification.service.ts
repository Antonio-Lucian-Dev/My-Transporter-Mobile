import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Notification } from '../interface/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

   // eslint-disable-next-line @typescript-eslint/naming-convention
   private URL = 'http://localhost:3000';

   constructor(private http: HttpClient) { }

   findAllNotification(): Observable<Notification[]> {
    return this.http.get<Notification[]>(`${this.URL}/notifications`);
   }

}

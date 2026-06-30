import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueueService {

  private api = 'https://mc-api.solcredio.net/api';

  constructor(private http: HttpClient) {}

  getQueue(): Observable<any> {
    return this.http.get<any>(`${this.api}/queue`);
  }

  updateRoom(room: string, number: number): Observable<any> {
    return this.http.put<any>(`${this.api}/queue/${room}`, {
      number
    });
  }
}
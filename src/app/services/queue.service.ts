import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface QueueRoom {
  room: string;
  doctor: string;
  number: string;
  doctorIn?: boolean;
}

export interface QueueResponse {
  room1: QueueRoom;
  room2: QueueRoom;
}

@Injectable({
  providedIn: 'root'
})
export class QueueService {

  private api = 'https://mc-api.solcredio.net/api';

  constructor(private http: HttpClient) {}

  getQueue(): Observable<QueueResponse> {
    const headers = new HttpHeaders({
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    });
    return this.http.get<QueueResponse>(`${this.api}/queue`, { headers });
  }

  updateRoom(room: string, number: number) {
    return this.http.put(`${this.api}/queue/${room}`, {
      number
    });
  }
}
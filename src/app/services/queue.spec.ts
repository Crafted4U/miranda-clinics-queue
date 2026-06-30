import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QueueService {

  private api = 'https://mc-api.solcredio.net/api';

  constructor(private http: HttpClient) {}

  getQueue() {
    return this.http.get<any>(`${this.api}/queue`);
  }

  updateRoom(room: string, number: number) {
    return this.http.put(`${this.api}/queue/${room}`, {
      number
    });
  }

}
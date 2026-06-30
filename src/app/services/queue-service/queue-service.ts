import { Injectable } from '@angular/core';
import { ConfigService } from '../config-service/config-service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodaysQueueResponse } from '../../models/queue/todays-queue-response';

@Injectable({
  providedIn: 'root',
})
export class QueueService {
  private microserviceBaseURL: string = "";
  private microserviceGetQueueURL: string = "";

  constructor(
    private readonly config: ConfigService,
    private readonly http: HttpClient
  ) {
    this.microserviceBaseURL = this.config.microserviceConfig.baseURL;
    this.microserviceGetQueueURL = `${this.microserviceBaseURL}${this.config.microserviceConfig.queueService.getTodaysQueue}`;
  }

  public getTodaysQueue(): Observable<TodaysQueueResponse> {
    return this.http.get<TodaysQueueResponse>(`${this.microserviceGetQueueURL}`);
  } 
}

import { Injectable } from '@angular/core';
import { AppConfig, MicroserviceConfig } from '../../models/core/app-config';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private config!: AppConfig;

  constructor(
    private readonly http: HttpClient
  ) {}

  public load(): Promise<void> {
    return firstValueFrom(this.http.get<AppConfig>('/assets/config/appConfig.json'))
      .then(config => {
        this.config = config;
      })
  }

  public get microserviceConfig(): MicroserviceConfig {
    return this.config.microservice;
  }
}

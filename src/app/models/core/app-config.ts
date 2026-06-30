export interface AppConfig {
    microservice: MicroserviceConfig;
}

export interface MicroserviceConfig {
    baseURL: string;
    queueService: QueueService;
}

export interface QueueService {
    getTodaysQueue: string;
    addQueueInfo: string;
}
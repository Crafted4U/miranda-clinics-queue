export interface TodaysQueueResponse {
    queueInfo: QueueInfo[]
}

export interface QueueInfo {
    id: number;
    queueDate: Date;
    queueNo: string;
    queuPatientName: string;
    queueRoom: string;
}
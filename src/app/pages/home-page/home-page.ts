import { Component, OnInit } from '@angular/core';
import { RoomCardComponent } from '../../component/room-card-component/room-card-component';
import { QueueService } from '../../services/queue-service/queue-service';
import { QueueInfo, TodaysQueueResponse } from '../../models/queue/todays-queue-response';
import { take } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [
    RoomCardComponent,
    CommonModule
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage implements OnInit {
  public queueRooms: QueueInfo[] = [];

  constructor(
    private readonly queueService: QueueService
  ) {}

  ngOnInit(): void {
    this.initializeQueueRoomsData();
  }

  private initializeQueueRoomsData(): void{
    this.queueService.getTodaysQueue()
      .pipe(take(1))
      .subscribe({
      next: (data: TodaysQueueResponse) => {
        this.queueRooms = [...data.queueInfo];
        console.log("Ricco queueRooms", this.queueRooms)
      },
      error: data => {
        console.log("Error", data)
      }
    })
  }
}

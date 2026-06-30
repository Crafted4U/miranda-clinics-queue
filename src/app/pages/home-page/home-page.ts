import { Component } from '@angular/core';
import { RoomCardComponent } from '../../component/room-card-component/room-card-component';

@Component({
  selector: 'app-home-page',
  imports: [
    RoomCardComponent
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  public queueRooms: string[] = ["Room 1", "Room 2"];

  constructor() {}
}

import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-room-card-component',
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './room-card-component.html',
  styleUrl: './room-card-component.scss',
})
export class RoomCardComponent {
  @Input() public queueNumber: string = '';
  @Input() public roomNumber: string = '';
}

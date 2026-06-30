import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './component/navigation-component/navigation-component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavigationComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  constructor() {}

  ngOnInit(): void {}

}
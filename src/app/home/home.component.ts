import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor() {
    console.log('HomeComponent constructor called');
  }

  ngOnInit(): void {
    console.log('HomeComponent ngOnInit called');
  }
  ngOnDestroy() {
    console.log('HomeComponent Destroyed');
  }
}

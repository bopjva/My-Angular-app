import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
  constructor() {
    console.log('AboutComponent constructor called');
  }
  // same as constructor and executed before constructor
  ngOnInit(): void {
    console.log('AboutComponent ngOnInit called');
  }
  ngOnDestroy() {
    console.log('AboutusComponent Destroyed');
  }
}

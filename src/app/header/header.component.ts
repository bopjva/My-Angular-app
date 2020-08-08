import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  //  constructor also function and executed by defaukt when call the component and this relates to type script
  // constructor executes before the  ngOnInit function
  constructor() {}
  // ngOnInit also function and executed by defaukt when call the component and this relates to angular

  ngOnInit() {}
  homeFunction() {
    console.log('homeFunction');
  }
}

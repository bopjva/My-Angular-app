import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  //  constructor also function and executed by defaukt when call the component and this relates to type script
  // constructor executes before the  ngOnInit function
  constructor() {}
  // ngOnInit also function and executed by defaukt when call the component and this relates to angular

  ngOnInit() {}
  footerFunction() {
    console.log('footerFunction called');
  }
}

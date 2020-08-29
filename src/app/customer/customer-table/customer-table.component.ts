import { Component, OnInit } from '@angular/core';
import { SchoolService } from 'src/app/school/school.service';
import { SharedPathService } from 'src/app/shared-path/shared-path.service';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.scss']
})
export class CustomerTableComponent implements OnInit {
  customerResponse: any;
  showTable: boolean = false;

  constructor(private schoolService: SchoolService, private sharedPathService: SharedPathService) { }

  ngOnInit(): void {
    this.sharedPathService.cast.subscribe(result => {
      console.log(result);
      this.customerResponse = result;
      this.showTable = true;
    })
  }
}

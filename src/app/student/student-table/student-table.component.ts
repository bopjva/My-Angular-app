import { Component, OnInit } from '@angular/core';
import { SharedPathService } from 'src/app/shared-path/shared-path.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {
  studentResponse: any;
  showTable: boolean = false;

  constructor(private sharedPathService: SharedPathService) { }

  ngOnInit(): void {
    this.sharedPathService.cast.subscribe(result => {
      this.studentResponse = result;
      this.showTable = true;
    })
  }

}

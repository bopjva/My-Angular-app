import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  // appService: any;
  studentList: any;
  showTable: boolean = false;

  constructor(private schoolService: SchoolService) {}

  ngOnInit(): void {}
  getSearchResults() {
    console.log('getSearchResults called');
    this.schoolService.getAllStudents().subscribe(result => {
      this.showTable = true;

      console.log(result);

      this.studentList = result;
    });
  }
}

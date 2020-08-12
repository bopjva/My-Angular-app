import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../school.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  // appService: any;
  studentList: any;
  showTable: boolean = false;

  constructor(private schoolService: SchoolService, private router: Router) {}

  ngOnInit(): void {}
  getSearchResults() {
    console.log('getSearchResults called');
    this.schoolService.getAllStudents().subscribe(
      result => {
        this.showTable = true;

        console.log(result);

        this.studentList = result;
      },
      err => {
        console.log('Error', err);
      }
    );
  }
  createFunction() {
    console.log('createFunction called');
    this.router.navigate(['/school/create']);
  }
  editFunction(id: string) {
    console.log('editFunction called');
    console.log(id);
    console.log(`/school/edit/${id}`);
    // dynamic route
    this.router.navigate([`/school/edit/${id}`]);
  }
}

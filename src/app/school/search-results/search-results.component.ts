import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../school.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ResponseModel } from '../models/ResponseModel';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  // appService: any;
  studentList: any;
  //ResponseModel;
  showTable: boolean = false;

  constructor(private schoolService: SchoolService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
      // filter(params => params.search)
      .subscribe(params => {
        console.log(params);
        if (params.search) {
          this.getSearchResults();
        }
      })
  }
  getSearchResults() {
    console.log('Search results flow');
    console.log('1');
    this.schoolService.getAllStudents().subscribe(
      result => {
        this.showTable = true;

        console.log('4');

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
    // console.log('Edit Flow');
    // console.log('1');
    // console.log(`/school/edit/${id}`);
    // dynamic route, how you pass dynamic params to url
    this.router.navigate([`/school/edit/${id}`]);
  }
  createParentFunction() {
    console.log('createParentFunction called');
    this.router.navigate(['/school/parent']);
  }
  deleteStudent(id: string) {
    this.schoolService.deleteData(id).subscribe(res => {
      console.log(res);
      this.getSearchResults();
    })

  }
}

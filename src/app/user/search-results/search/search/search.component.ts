import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  getAllStudents() {
    console.log('1');
    this.userService.getAllStudentData();

  }
}

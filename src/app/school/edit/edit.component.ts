import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../school.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  id: string;
  constructor(
    private schoolService: SchoolService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // we are call the id which is in the url
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.schoolService.getStudentById(this.id).subscribe(result => {
      console.log(result);
    });
  }
}

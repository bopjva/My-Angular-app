import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  constructor(private http: HttpClient) {}
  getAllStudents() {
    console.log('getAllStudents called');
    let url: string = 'http://localhost:3000/api/student';
    console.log(url);
    let response = this.http.get(url);
    console.log(response);
    return response;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  constructor(private http: HttpClient) {}
  getAllStudents() {
    console.log('getAllStudents called');
    let url: string = 'http://localhost:3010/api/student';
    console.log(url);
    let response = this.http.get(url);
    console.log(response);
    return response;
  }
  getStudentById(id: string) {
    console.log('getStudentById called');
    let url: string = `http://localhost:3010/api/student/${id}`;
    console.log(url);
    let response = this.http.get(url);
    console.log(response);
    return response;
  }
  addStudent(studentData: any) {
    console.log(studentData);
    let url: string = 'http://localhost:3010/api/student';
    let response = this.http.post(url, studentData);
    console.log(response);
    return response;
  }
  getUpdateStudentInfo(studentData: any) {
    console.log('getUpdateStudentInfo function called');
    let url: string = '';
    console.log(url);
    let response = this.http.put(url, studentData);
    console.log(response);
    return response;
  }
}

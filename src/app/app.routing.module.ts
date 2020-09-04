import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CopyRightComponent } from './copy-right/copy-right.component';
import { CareersComponent } from './careers/careers.component';
import { SchoolComponent } from './school/school.component';
import { SearchResultsComponent } from './school/search-results/search-results.component';
import { CreateStudentComponent } from './school/create-student/create-student.component';
import { EditComponent } from './school/edit/edit.component';
import { CreateParentComponent } from './school/create-parent/create-parent.component';
import { } from './user/user.module';

// routing logic for page navigation
const routes: Routes = [
  // {path: 'home', component: HomeComponent},
  //redirecTo syntax will be used to default ruting to given page below example:home
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // each component url will have given below name in quotes at the end of main url to navaigate to specific page
  { path: 'employee', component: EmployeeComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'copyright', component: CopyRightComponent },
  { path: 'careers', component: CareersComponent },
  // children component used to show children component in other component
  {
    path: 'school',
    component: SchoolComponent,
    children: [
      { path: '', redirectTo: 'search-results', pathMatch: 'full' },
      { path: 'search-results', component: SearchResultsComponent },
      { path: 'create', component: CreateStudentComponent },
      { path: 'parent', component: CreateParentComponent },

      // dynamic route
      { path: 'edit/:id', component: EditComponent }
    ]
  },
  //Lazyloading
  {
    path: 'student',
    loadChildren: () =>
      import('./student/student.module').then(m => m.StudentModule)
  },

  {
    path: 'user',
    loadChildren: () =>
      import('./user/user.module').then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

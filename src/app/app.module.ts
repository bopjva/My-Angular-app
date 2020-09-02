import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeeComponent } from './employee/employee.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CopyRightComponent } from './copy-right/copy-right.component';
import { CareersComponent } from './careers/careers.component';
import { MyworkComponent } from './mywork/mywork.component';
import { SchoolComponent } from './school/school.component';
import { SearchResultsComponent } from './school/search-results/search-results.component';
import { CreateStudentComponent } from './school/create-student/create-student.component';
import { EditComponent } from './school/edit/edit.component';
import { CreateParentComponent } from './school/create-parent/create-parent.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerFilterComponent } from './customer/customer-filter/customer-filter.component';
import { CustomerTableComponent } from './customer/customer-table/customer-table.component';
import {StoreModule} from '@ngrx/store';
import { homeReducer } from './store/home.reducer';
import { appReducer } from './app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { SharedModule } from './shared.module';
@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    HeaderComponent,
    FooterComponent,
    EmployeeComponent,
    HomeComponent,
    AboutComponent,
    ContactusComponent,
    CopyRightComponent,
    CareersComponent,
    MyworkComponent,
    SchoolComponent,
    SearchResultsComponent,
    CreateStudentComponent,
    EditComponent,
    CreateParentComponent,
    CustomerFilterComponent,
    CustomerTableComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

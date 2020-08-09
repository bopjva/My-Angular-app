import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeeComponent } from './employee/employee.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CopyRightComponent } from './copy-right/copy-right.component';
import { CareersComponent } from './careers/careers.component';

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
    CareersComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

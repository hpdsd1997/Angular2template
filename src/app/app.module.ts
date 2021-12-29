import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { EmployeeListComponent } from './employee.component';
import { HomeComponent } from './home.component';
import { EmployeeService } from './service/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { appRoutes } from './app.route';
import { NotFoundComponent } from './notfound.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeOverviewComponent } from './employee-overview.component';
import { EmployeeProjectsComponent } from './employee-projects.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    HomeComponent,
    NotFoundComponent,
    EmployeeDetailComponent,
    EmployeeOverviewComponent,
    EmployeeProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    appRoutes
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

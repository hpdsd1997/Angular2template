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
import { LoginComponent } from './login.component';
import { LoginService } from './service/login.service';
import { CheckLoginGuard } from './guards/check-login-guards';
import { CheckSaveFormGuard } from './guards/check-save-form-guard';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    HomeComponent,
    NotFoundComponent,
    EmployeeDetailComponent,
    EmployeeOverviewComponent,
    EmployeeProjectsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    appRoutes
  ],
  providers: [EmployeeService,LoginService,CheckLoginGuard,CheckSaveFormGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

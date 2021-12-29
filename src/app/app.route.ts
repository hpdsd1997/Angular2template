import { Routes, RouterModule } from "@angular/router";
import { EmployeeListComponent } from "./employee.component";
import { HomeComponent } from "./home.component";
import { NotFoundComponent } from "./notfound.component";
import { EmployeeDetailComponent } from "./employee-detail.component";
import { EmployeeOverviewComponent } from './employee-overview.component';
import { EmployeeProjectsComponent } from './employee-projects.component';
import { LoginComponent } from "./login.component";
import { CheckLoginGuard } from "./guards/check-login-guards";
import { CheckSaveFormGuard } from './guards/check-save-form-guard';
const routing: Routes = [
    { path: '', component: HomeComponent },
    { path: 'employees', component: EmployeeListComponent, canActivate: [CheckLoginGuard] },
    { path: 'login', component: LoginComponent },
    {
        path: 'employees-detail/:id', component: EmployeeDetailComponent,canDeactivate:[CheckSaveFormGuard]
        , children: [
            { path: 'overview', component: EmployeeOverviewComponent },
            { path: 'projects', component: EmployeeProjectsComponent }
        ]
    },
    { path: '**', component: NotFoundComponent },


]

export const appRoutes = RouterModule.forRoot(routing);
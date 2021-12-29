import { Routes, RouterModule } from "@angular/router";
import { EmployeeListComponent } from "./employee.component";
import { HomeComponent } from "./home.component";
import { NotFoundComponent } from "./notfound.component";
import { EmployeeDetailComponent } from "./employee-detail.component";
import { EmployeeOverviewComponent } from './employee-overview.component';
import { EmployeeProjectsComponent } from './employee-projects.component';
const routing: Routes = [
    { path: '', component: HomeComponent },
    { path: 'employees', component: EmployeeListComponent },
    { path: 'employees-detail/:id', component: EmployeeDetailComponent
    ,children:[
        {path:'overview',component:EmployeeOverviewComponent},
        {path:'projects',component:EmployeeProjectsComponent}
    ] },
    { path: '**', component: NotFoundComponent },
    

]

export const appRoutes = RouterModule.forRoot(routing);
import { Routes,RouterModule } from "@angular/router";
import { EmployeeListComponent } from "./employee.component";
import { HomeComponent } from "./home.component";
import { NotFoundComponent } from "./notfound.component";
 const routing: Routes=[
    {path:'',component:HomeComponent},
    {path:'employees',component:EmployeeListComponent},
    {path:'**',component:NotFoundComponent},
]

export const appRoutes=RouterModule.forRoot(routing);
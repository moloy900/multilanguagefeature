import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services.component';
import { WebdesignComponent } from './webdesign/webdesign.component';
import { GraphicdesignComponent } from './graphicdesign/graphicdesign.component';
import { SeoserviceComponent } from './seoservice/seoservice.component';
import { DataentryComponent } from './dataentry/dataentry.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path:'',component:ServicesComponent,children:[
    {path:'webdesign',component:WebdesignComponent},
    {path:'graphicdesign',component:GraphicdesignComponent},
    {path:'seoservices',component:SeoserviceComponent},
    {path:'dataentry',component:DataentryComponent},
    {path:'employee/:id',component:EmployeeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }

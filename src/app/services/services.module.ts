import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { WebdesignComponent } from './webdesign/webdesign.component';
import { GraphicdesignComponent } from './graphicdesign/graphicdesign.component';
import { DataentryComponent } from './dataentry/dataentry.component';
import { SeoserviceComponent } from './seoservice/seoservice.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmployeeComponent } from './employee/employee.component';


@NgModule({
  declarations: [
    ServicesComponent,
    WebdesignComponent,
    GraphicdesignComponent,
    DataentryComponent,
    SeoserviceComponent,
    EmployeeComponent

  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    FontAwesomeModule
  ]
})
export class ServicesModule { }

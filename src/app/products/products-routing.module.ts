import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { TVComponent } from './tv/tv.component';
import { MobileComponent } from './mobile/mobile.component';
import { WashingMachineComponent } from './washing-machine/washing-machine.component';

const routes: Routes = [
  {path:'', component:ProductsComponent, children:[
    {path:'tv',component:TVComponent},
  {path:'laptop',component:TVComponent},
  {path:'mobile',component:MobileComponent},
  {path:'washingmachine',component:WashingMachineComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

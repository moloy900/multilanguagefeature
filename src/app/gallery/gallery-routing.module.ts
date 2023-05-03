import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TVComponent } from './tv/tv.component';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';
import { WashingMachineComponent } from './washing-machine/washing-machine.component';
import { GalleryComponent } from './gallery.component';

const routes: Routes = [
  {path:'', component:GalleryComponent, children:[
    {path:'tv',component:TVComponent},
  {path:'laptop',component:LaptopComponent},
  {path:'mobile',component:MobileComponent},
  {path:'washingmachine',component:WashingMachineComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }

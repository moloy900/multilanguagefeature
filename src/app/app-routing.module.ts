import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ManageproductsComponent } from './manageproducts/manageproducts.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ManageuserComponent } from './manageuser/manageuser.component';

const routes: Routes = [

    //for En language Routing
  { path: '', redirectTo:'/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'products', loadChildren: () =>import('./products/products.module').then((res) => res.ProductsModule),},
  { path: 'service', loadChildren: () =>import('./services/services.module').then((res) => res.ServicesModule),},
  { path: 'manageproduct', component: ManageproductsComponent },
  { path: 'manageuser', component: ManageuserComponent },
  { path: 'contact', component: ContactComponent },
  

  //for De language Routing
  { path: 'de/', redirectTo:'home', pathMatch: 'full'},
  { path: 'de/home', component: HomeComponent },
  { path: 'de/aboutus', component: AboutusComponent },
  { path: 'de/gallery', component: GalleryComponent },
  { path: 'de/products', loadChildren: () =>import('./products/products.module').then((res) => res.ProductsModule),},
  { path: 'de/service', loadChildren: () =>import('./services/services.module').then((res) => res.ServicesModule),},
  { path: 'de/manageproduct', component: ManageproductsComponent },
  { path: 'de/manageuser', component: ManageuserComponent },
  { path: 'de/contact', component: ContactComponent },
  // { path: '**', component: PagenotfoundComponent }  
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

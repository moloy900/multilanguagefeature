import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';

import { ProductsModule } from './products/products.module';
import { GalleryComponent } from './gallery/gallery.component';
import { ServicesModule } from './services/services.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LangTranslateModule } from './lang-translate/lang-translate.module';
import { ManageproductsComponent } from './manageproducts/manageproducts.component';
import { FetchProductsService } from './fetch-products.service';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ManageuserComponent } from './manageuser/manageuser.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutusComponent,
    GalleryComponent,
    PagenotfoundComponent,
    ManageproductsComponent,
    ManageuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    ServicesModule,
    LangTranslateModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [FetchProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

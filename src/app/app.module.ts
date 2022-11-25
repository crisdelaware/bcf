import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SwiperModule } from 'swiper/angular';

import { HttpClientModule } from "@angular/common/http";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CotizarComponent } from './components/cotizar/cotizar.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignInComponent,
    DashboardComponent,
    HomeComponent,
    ContactoComponent,
    CotizarComponent,
    CatalogoComponent
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    SweetAlert2Module.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SweetAlert2Module,
    SwiperModule,
    FormsModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}

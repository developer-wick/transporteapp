import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/acceso/login/login.component';
import { CambioclaveComponent } from './components/acceso/cambioclave/cambioclave.component';
import { HeaderComponent } from './components/menu/header/header.component';
import { SidenavComponent } from './components/menu/sidenav/sidenav.component';
import { HomeComponent } from './components/menu/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CambioclaveComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

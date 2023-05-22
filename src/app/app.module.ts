import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { TokeninterceptorService } from './services/tokeninterceptor/tokeninterceptor.service';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/acceso/login/login.component';
import { CambioclaveComponent } from './components/acceso/cambioclave/cambioclave.component';
import { HeaderComponent } from './components/menu/header/header.component';
import { SidenavComponent } from './components/menu/sidenav/sidenav.component';
import { HomeComponent } from './components/menu/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuariosComponent } from './components/administracion/usuarios/usuarios.component';
import { PermisosComponent } from './components/administracion/permisos/permisos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CambioclaveComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    UsuariosComponent,
    PermisosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    //MATERIAL
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatCardModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokeninterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/acceso/login/login.component';
import { HomeComponent } from './components/menu/home/home.component';
import { AuthGuard } from './guard/auth.guard';
import { UsuariosComponent } from './components/administracion/usuarios/usuarios.component';
import { PermisosComponent } from './components/administracion/permisos/permisos.component';
import { CatalogosModule } from './components/catalogos/catalogos.module';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  { path: 'usuarios', component: UsuariosComponent, canActivate:[AuthGuard]},
  { path: 'permisos', component: PermisosComponent, canActivate:[AuthGuard]},
  { path: 'cata', loadChildren: () => import ('./components/catalogos/catalogos.module').then(m => CatalogosModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

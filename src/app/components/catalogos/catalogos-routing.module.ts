import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CamionComponent } from './camion/camion.component';
import { PilotosComponent } from './pilotos/pilotos.component';
import { ProductosComponent } from './productos/productos.component';
import { TarifaembarqueComponent } from './tarifaembarque/tarifaembarque.component';
import { TipoanticipoComponent } from './tipoanticipo/tipoanticipo.component';
import { TransportistaComponent } from './transportista/transportista.component';
import { UnidadmedidaComponent } from './unidadmedida/unidadmedida.component';
import { TipocamionComponent } from './tipocamion/tipocamion.component';


const routes:Routes= [
  {
    path: '',
    children: [
      { path:'camion', component: CamionComponent },
      { path:'pilotos', component: PilotosComponent },
      { path:'productos', component: ProductosComponent },
      { path:'tarifaembarque', component: TarifaembarqueComponent },
      { path:'tipoanticipo', component: TipoanticipoComponent },
      { path:'tipocamion', component: TipocamionComponent },
      { path:'transportista', component: TransportistaComponent },
      { path:'unidadmedida', component: UnidadmedidaComponent },
      { path:'**', redirectTo:'login' }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    //CommonModule
    RouterModule.forChild(routes)
  ]
})
export class CatalogosRoutingModule { }

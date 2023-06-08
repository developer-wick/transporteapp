import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransportistaComponent } from './transportista/transportista.component';
import { TarifaembarqueComponent } from './tarifaembarque/tarifaembarque.component';
import { TipocamionComponent } from './tipocamion/tipocamion.component';
import { TipoanticipoComponent } from './tipoanticipo/tipoanticipo.component';
import { UnidadmedidaComponent } from './unidadmedida/unidadmedida.component';
import { ProductosComponent } from './productos/productos.component';
import { CamionComponent } from './camion/camion.component';
import { PilotosComponent } from './pilotos/pilotos.component';
import { CatalogosRoutingModule } from './catalogos-routing.module';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    TransportistaComponent,
    TarifaembarqueComponent,
    TipocamionComponent,
    TipoanticipoComponent,
    UnidadmedidaComponent,
    ProductosComponent,
    CamionComponent,
    PilotosComponent
  ],
  imports: [
    CommonModule,
    CatalogosRoutingModule,
    DataTablesModule,
    
  ]
})
export class CatalogosModule { }

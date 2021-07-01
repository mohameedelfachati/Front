import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParcautoRoutingModule } from './parcauto-routing.module';
import { ParcautoComponent } from './parcauto.component';
import { ConsulterDemandedispoComponent } from './consulter-demandedispo/consulter-demandedispo.component';
import { EditeDemandedispoComponent } from './edite-demandedispo/edite-demandedispo.component';
import { ListDemandemisdispoComponent } from './list-demandemisdispo/list-demandemisdispo.component';
import {ReactiveFormsModule} from '@angular/forms'

import {  NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [ParcautoComponent, ConsulterDemandedispoComponent, EditeDemandedispoComponent, ListDemandemisdispoComponent],
  imports: [
  
 
    CommonModule,
    ParcautoRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    
    NgbPaginationModule,
    MatTableModule
  
    

  ]
})
export class ParcautoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbattoirRoutingModule } from './abattoir-routing.module';
import { AbattoirComponent } from './abattoir.component';
import { ListAbattoirComponent } from './list-abattoir/list-abattoir.component';
import { EditAbattoirComponent } from './edit-abattoir/edit-abattoir.component';
import {ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { ConsulterAbattoirComponent } from './consulter-abattoir/consulter-abattoir.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [AbattoirComponent, ListAbattoirComponent, EditAbattoirComponent, ConsulterAbattoirComponent],
  imports: [
    CommonModule,
    AbattoirRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbPaginationModule,
    MatTableModule,
    MatIconModule
  ]
})
export class AbattoirModule { }

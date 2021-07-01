import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbattoirComponent } from './abattoir.component';
import { ConsulterAbattoirComponent } from './consulter-abattoir/consulter-abattoir.component';
import { EditAbattoirComponent } from './edit-abattoir/edit-abattoir.component';
import { ListAbattoirComponent } from './list-abattoir/list-abattoir.component';

const routes: Routes = [
  {
    path: '',
    component: AbattoirComponent,
    children: [
      {
        path: 'list',
        component: ListAbattoirComponent
      },
      {
        path: 'add',
        component: EditAbattoirComponent
      },
      {
        path: 'edit/:id',
        component: EditAbattoirComponent
      },
      {
        path :'consulter/:id',
        component :ConsulterAbattoirComponent
      },  
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      }
    ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbattoirRoutingModule { }

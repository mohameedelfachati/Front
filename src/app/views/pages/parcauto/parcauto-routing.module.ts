import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsulterDemandedispoComponent } from './consulter-demandedispo/consulter-demandedispo.component';
import { EditeDemandedispoComponent } from './edite-demandedispo/edite-demandedispo.component';
import { ListDemandemisdispoComponent } from './list-demandemisdispo/list-demandemisdispo.component';

import { ParcautoComponent } from './parcauto.component';

const routes: Routes = [

  { path: '',
   component: ParcautoComponent ,
   children : [
     {
       path :'list',
       component: ListDemandemisdispoComponent
     },
     {
       path:'edit',
       component: EditeDemandedispoComponent
     },
     {
       path:'consulter',
       component: ConsulterDemandedispoComponent
     },
     {
       path: 'add',
       component: EditeDemandedispoComponent
     }
   ]


}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParcautoRoutingModule { }

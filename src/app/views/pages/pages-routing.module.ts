// Angular
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// Components
// Auth

const routes: Routes = [

    {
        path: 'abattoir',
        loadChildren: () =>
            import('./abattoir/abattoir.module').then(m => m.AbattoirModule)
    },

    { path: 'parcauto', 
      loadChildren: () =>
             import('./parcauto/parcauto.module').then(m => m.ParcautoModule) 
    
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class PagesRoutingModule { }

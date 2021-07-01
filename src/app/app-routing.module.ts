// Angular
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// Components
import { BaseComponent } from "./views/theme/base/base.component";
// Auth
import { AuthGuard } from "./core/auth";
import { ErrorPageComponent } from './views/theme/content/error-page/error-page.component';




const routes: Routes = [
	{
		path: "auth",
		loadChildren: () =>
			import("./views/pages/auth/auth.module").then(m => m.AuthModule)
	},
	{
		path: "abattoir",
		loadChildren: () =>
			import("./views/pages/abattoir/abattoir.module").then(m => m.AbattoirModule)
	},
	{
		path: "parcauto",
		loadChildren: () =>
			import("./views/pages/parcauto/parcauto.module").then(m => m.ParcautoModule)
	},

	{
		path: "",
		component: BaseComponent,
		//anActivate: [AuthGuard],
		children: [
					
			// ***************************** ERROR ********************************
			{path: 'error', component: ErrorPageComponent},
			{path: '', redirectTo: '', pathMatch: 'full'},
			{path: '**', redirectTo: '', pathMatch: 'full'},

		]
	},
	//{path: '**', redirectTo: 'error', pathMatch: 'full'},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { CreateComponent} from './modules/create/create.component';
import { LoginComponent} from './modules/login/login.component';
import { ConsumersComponent } from './modules/consumers/consumers.component';
import { SearchconsumerComponent } from './modules/searchconsumer/searchconsumer.component';

const routes: Routes = [{
	path: '',
	component: DefaultComponent,
	children: [{
		path: '',
		component: LoginComponent,
	}, {
		path: 'create',
		component: CreateComponent,
		
	},{
		path: 'searchconsumer',
		component:SearchconsumerComponent,

	},{
		path: 'dashboard',
		component: DashboardComponent,
	
	},{
		path: 'consumers',
		component: ConsumersComponent,
	
	}]
}];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
	
 }

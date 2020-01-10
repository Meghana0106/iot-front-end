import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { ConsumersComponent } from './modules/consumers/consumers.component';

const routes: Routes = [{
	path: '',
	component: DefaultComponent,
	children: [{
		path: '',
		component: DashboardComponent
	}, {
		path: 'posts',
		component: PostsComponent,
	
	},{
		path: 'consumers',
		component: ConsumersComponent,
	
	}]
}];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

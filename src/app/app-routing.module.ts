import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './todo/list/list.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
	{
		path: '',
		component: TodoComponent,
	},
	{
		path: 'list/:id',
		component: ListComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { ListComponent } from './todo/list/list.component';
import { NewTaskComponent } from './todo/new-task/new-task.component';
import { TaskListComponent } from './todo/task-list/task-list.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
	declarations: [
		AppComponent,
		TodoComponent,
		NewTaskComponent,
		TaskListComponent,
		ListComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		StoreModule,
		FormsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {
}

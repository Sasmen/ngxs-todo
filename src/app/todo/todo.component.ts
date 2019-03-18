import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { List, ListState, ListStateModel } from '../store/list/list.state';

@Component({
	selector: 'app-todo',
	templateUrl: './todo.component.html',
	styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {

	@Select(ListState.getItems) lists$: Observable<List[]>;

	constructor() {
	}

	ngOnInit() {
	}
}

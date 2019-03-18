import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { List, ListState } from '../../store/list/list.state';
import { TodoAddAction, TodoCompleteAction, TodoRemoveAction } from '../../store/task/task.actions';
import { Task } from '../../store/task/task.state';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

	public id: string;
	public list$: Observable<List>;

	constructor(private store: Store, private activatedRoute: ActivatedRoute) {
	}

	ngOnInit() {
		this.id = this.activatedRoute.snapshot.params.id;
		this.list$ = this.store.select(ListState.getListWithItems(this.id));

	}

	create(task: Task) {
		this.store.dispatch(new TodoAddAction(task));
	}

	remove(id: number) {
		this.store.dispatch(new TodoRemoveAction(id));
	}

	complete(id: number) {
		this.store.dispatch(new TodoCompleteAction(id));
	}

}

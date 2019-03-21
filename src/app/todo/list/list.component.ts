import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { List, ListState } from '../../store/list/list.state';
import { TodoAdd, TodoComplete, TodoRemove, TodoToggle } from '../../store/task/task.actions';
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
		this.list$ = this.store.select(ListState.getListWithItems(this.id))
			.pipe(map((list: List) => {
				return {
					...list, items: list.items.sort((a: Task, b: Task) => {
						return a.completed === b.completed ? 0 : a.completed ? 1 : -1;
					}),
				};
			}));
	}

	create(task: Task) {
		this.store.dispatch(new TodoAdd({ ...task, listId: this.id }));
	}

	remove(id: string) {
		this.store.dispatch(new TodoRemove({ id }));
	}

	complete(id: string) {
		this.store.dispatch(new TodoComplete({ id }));
	}

	toggle(id: string) {
		this.store.dispatch(new TodoToggle({ id }));
	}
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../store/task/task.state';

@Component({
	selector: 'app-task-list',
	templateUrl: './task-list.component.html',
	styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {

	@Input() list: Task[];
	@Output() removeChange = new EventEmitter<string>();
	@Output() completeChange = new EventEmitter<string>();
	@Output() toggleChange = new EventEmitter<string>();

	constructor() {
	}

	ngOnInit() {
	}

	remove(id: string) {
		this.removeChange.emit(id);
	}

	complete(id: string) {
		this.completeChange.emit(id);
	}

	toggle(id: string) {
		this.toggleChange.emit(id);
	}
}

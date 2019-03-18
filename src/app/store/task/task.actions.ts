import { Task } from './task.state';

export class TodoAddAction {
	public static readonly type = '[Todo] Add task';

	constructor(public payload: Task) {
	}
}

export class TodoRemoveAction {
	public static readonly type = '[Todo] Remove task';

	constructor(public payload: number) {
	}
}

export class TodoCompleteAction {
	public static readonly type = '[Todo] Complete task';

	constructor(public payload: number) {
	}
}

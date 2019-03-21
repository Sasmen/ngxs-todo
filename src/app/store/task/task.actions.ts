export class TodoAdd {
	public static readonly type = '[Todo] Add task';

	constructor(public payload: { name: string, listId: string }) {
	}
}

export class TodoRemove {
	public static readonly type = '[Todo] Remove task';

	constructor(public payload: {id: string}) {
	}
}

export class TodoComplete {
	public static readonly type = '[Todo] Complete task';

	constructor(public payload: {id: string}) {
	}
}

export class TodoUncomplete {
	public static readonly type = '[Todo] Uncomplete task';

	constructor(public payload: {id: string}) {
	}
}

export class TodoToggle {
	public static readonly type = '[Todo] Toggle task';

	constructor(public payload: {id: string}) {
	}
}

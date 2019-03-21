export class ListAction {
	public static readonly type = '[List] Add item';

	constructor(public payload: string) { }
}

export class AssignTaskToListAction {
	public static readonly type = '[List] Assign task to list';

	constructor(public payload: { taskId: string, listId: string }) { }
}

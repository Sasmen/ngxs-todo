import { Action, createSelector, Selector, State, StateContext } from '@ngxs/store';
import { append, patch, removeItem, updateItem } from '@ngxs/store/operators';
import { TodoAddAction, TodoCompleteAction, TodoRemoveAction } from './task.actions';

export interface TaskStateModel {
	items: Task[];
	nextId: number;
}

export interface Task {
	id: string;
	name: string;
	completed: boolean;
}

@State<TaskStateModel>({
	name: 'todo',
	defaults: {
		items: [
			{
				id: '1',
				name: 'Masło',
				completed: false,
			},
			{
				id: '2',
				name: 'Chleb',
				completed: false,
			},
			{
				id: '3',
				name: 'Przeczytać książkę',
				completed: false,
			},
		],
		nextId: 2,
	},
})
export class TaskState {

	@Selector()
	public static getState(state: TaskStateModel) {
		return state;
	}

	// @Action(TodoAddAction)
	// public add(ctx: StateContext<TaskStateModel>, { payload }: TodoAddAction) {
	// 	payload.id = ctx.getState().nextId;
	// 	ctx.setState(patch(
	// 		{
	// 			items: append([payload]),
	// 			nextId: payload.id + 1,
	// 		}),
	// 	);
	// }

	// @Action(TodoRemoveAction)
	// public remove(ctx: StateContext<TaskStateModel>, { payload }: TodoRemoveAction) {
	// 	ctx.setState(patch({
	// 		items: removeItem((el: Task) => el.id === payload),
	// 	}));
	// }

	// @Action(TodoCompleteAction)
	// public complete(ctx: StateContext<TaskStateModel>, { payload }: TodoCompleteAction) {
	// 	ctx.setState(patch({
	// 		items: updateItem((item: Task) => item.id === payload, patch({ completed: true })),
	// 	}));
	// }
}

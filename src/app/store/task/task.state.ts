import { Action, Selector, State, StateContext } from '@ngxs/store';
import { append, patch, removeItem, updateItem } from '@ngxs/store/operators';
import { AssignTaskToListAction } from '../list/list.actions';
import { TodoAdd, TodoComplete, TodoToggle, TodoRemove, TodoUncomplete } from './task.actions';

export interface TaskStateModel {
	items: Task[];
	nextId: string;
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
		nextId: '4',
	},
})
export class TaskState {

	@Selector()
	public static getState(state: TaskStateModel) {
		return state;
	}

	@Action(TodoAdd)
	public add(ctx: StateContext<TaskStateModel>, { payload }: TodoAdd) {
		const id = ctx.getState().nextId;
		const task: Task = {
			id,
			completed: false,
			name: payload.name,
		};
		ctx.setState(patch(
			{
				items: append([task]),
				nextId: (+id + 1) + '',
			}),
		);
		ctx.dispatch(new AssignTaskToListAction({ taskId: id, listId: payload.listId }));
	}

	@Action(TodoRemove)
	public remove(ctx: StateContext<TaskStateModel>, { payload }: TodoRemove) {
		ctx.setState(patch({
			items: removeItem((el: Task) => el.id === payload.id),
		}));
	}

	@Action(TodoComplete)
	public complete(ctx: StateContext<TaskStateModel>, { payload }: TodoComplete) {
		ctx.setState(patch({
			items: updateItem((item: Task) => item.id === payload.id, patch({ completed: true })),
		}));
	}

	@Action(TodoUncomplete)
	public uncomplete(ctx: StateContext<TaskStateModel>, { payload }: TodoComplete) {
		ctx.setState(patch({
			items: updateItem((item: Task) => item.id === payload.id, patch({ completed: false })),
		}));
	}

	@Action(TodoToggle)
	public toggleComplete(ctx: StateContext<TaskStateModel>, { payload }: TodoComplete) {
		const prevValue = ctx.getState().items.find((item: Task) => item.id === payload.id).completed;
		ctx.setState(patch({
			items: updateItem((item: Task) => item.id === payload.id, patch({ completed: !prevValue })),
		}));
	}
}

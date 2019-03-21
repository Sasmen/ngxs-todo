import { Action, createSelector, Selector, State, StateContext } from '@ngxs/store';
import { append, patch, removeItem, updateItem } from '@ngxs/store/operators';
import { TodoRemove } from '../task/task.actions';
import { Task, TaskState, TaskStateModel } from '../task/task.state';
import { AssignTaskToListAction } from './list.actions';

export interface ListStateModel {
	items: List[];
}

export interface List {
	id: string;
	name: string;
	_items: string[];
	items?: Task[];
	loading: boolean;
}

@State<ListStateModel>({
	name: 'list',
	defaults: {
		items: [
			{
				id: '1',
				name: 'Lista zakupów',
				_items: ['1', '2'],
				loading: false,
			}, {
				id: '2',
				name: 'Zadania',
				_items: ['3'],
				loading: false,
			},
		],
	},
})
export class ListState {

	@Selector()
	public static getItems(state: ListStateModel) {
		return state.items;
	}

	public static getListWithItems(id: string) {
		return createSelector([ListState, TaskState], (listState: ListStateModel, taskState: TaskStateModel) => {
			const foundList = listState.items.find((list: List) => {
				return list.id === id;
			});
			const items = [];
			foundList._items.forEach((taskId: string) => {
				items.push(taskState.items.find((task: Task) => {
					return task.id === taskId;
				}));
			});
			return { ...foundList, items };
		});
	}

	public static getListById(id: string) {
		return createSelector([ListState], (state: ListStateModel) => {
			return state.items.find((el: List) => {
				return el.id === id;
			});
		});
	}

	@Action(AssignTaskToListAction)
	public assignTaskToList(ctx: StateContext<ListStateModel>, { payload }: AssignTaskToListAction) {
		ctx.setState(
			patch({
				items: updateItem(
					(list: List) => list.id === payload.listId,
					patch({ _items: append([payload.taskId]) }),
				),
			}),
		);
	}


	@Action(TodoRemove)
	public remove(ctx: StateContext<ListStateModel>, { payload }: TodoRemove) {
		ctx.setState(
			patch({
				items: updateItem(
					(list: List) => list._items.indexOf(payload.id) > -1,
					patch({ _items: removeItem((taskId: string) => taskId === payload.id) }),
				),
			}),
		);
	}
}

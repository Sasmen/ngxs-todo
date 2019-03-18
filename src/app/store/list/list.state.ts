import { createSelector, Selector, State } from '@ngxs/store';
import { Task, TaskState, TaskStateModel } from '../task/task.state';

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
			foundList.items = items;
			return foundList;
		});
	}

	public static getListById(id: string) {
		return createSelector([ListState], (state: ListStateModel) => {
			return state.items.find((el: List) => {
				return el.id === id;
			});
		});
	}

	// @Action(ListAction)
	// public add(ctx: StateContext<ListStateModel>, {payload}: ListAction) {
	//     const stateModel = ctx.getState();
	//     stateModel.items = [...stateModel.items, payload];
	//     ctx.setState(stateModel);
	// }
}

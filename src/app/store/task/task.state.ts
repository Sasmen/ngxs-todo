import {Action, createSelector, Selector, State, StateContext} from '@ngxs/store';
import {TodoAddAction, TodoCompleteAction, TodoRemoveAction} from './task.actions';
import {append, patch, removeItem, updateItem} from '@ngxs/store/operators';

export interface TodoStateModel {
    items: Task[];
    nextId: number;
}

export interface Task {
    id: number;
    name: string;
    completed: boolean;
}

@State<TodoStateModel>({
    name: 'todo',
    defaults: {
        items: [
            {
                id: 1,
                name: 'Masło',
                completed: false,
            },
            {
                id: 2,
                name: 'Chleb',
                completed: false,
            },
            {
                id: 3,
                name: 'Przeczytać książkę',
                completed: false,
            },
        ],
        nextId: 2,
    }
})
export class TaskState {

    @Selector()
    public static getState(state: TodoStateModel) {
        return state;
    }

    public static getItems(ids: number[]) {
        return createSelector([TaskState], (state: TodoStateModel) => {
            return state.items.filter((el) => {
                return ids.indexOf(el.id) >= 0;
            });
        });
    }

    @Action(TodoAddAction)
    public add(ctx: StateContext<TodoStateModel>, {payload}: TodoAddAction) {
        payload.id = ctx.getState().nextId;
        ctx.setState(patch(
            {
                items: append([payload]),
                nextId: payload.id + 1,
            })
        );
    }

    @Action(TodoRemoveAction)
    public remove(ctx: StateContext<TodoStateModel>, {payload}: TodoRemoveAction) {
        ctx.setState(patch({
            items: removeItem((el: Task) => el.id === payload)
        }));
    }

    @Action(TodoCompleteAction)
    public complete(ctx: StateContext<TodoStateModel>, {payload}: TodoCompleteAction) {
        ctx.setState(patch({
            items: updateItem((item: Task) => item.id === payload, patch({completed: true}))
        }));
    }
}

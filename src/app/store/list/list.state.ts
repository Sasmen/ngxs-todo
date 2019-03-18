import {createSelector, Selector, State} from '@ngxs/store';

export interface ListStateModel {
    items: List[];
}

export interface List {
    id: number;
    name: string;
    items: number[];
}

@State<ListStateModel>({
    name: 'list',
    defaults: {
        items: [{
            id: 1,
            name: 'Lista zakupów',
            items: [1, 2]
        }, {
            id: 2,
            name: 'Zadania',
            items: [3]
        }]
    }
})
export class ListState {

    @Selector()
    public static getItems(state: ListStateModel) {
        return state.items;
    }

    public static getListById(id: number) {
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

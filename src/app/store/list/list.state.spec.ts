import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { ListState, ListStateModel } from './list.state';
import { ListAction } from './list.actions';

describe('List store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([ListState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    const expected: ListStateModel = {
      items: ['item-1']
    };
    store.dispatch(new ListAction('item-1'));
    const actual = store.selectSnapshot(ListState.getState);
    expect(actual).toEqual(expected);
  });

});

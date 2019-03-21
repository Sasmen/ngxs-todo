import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { TaskState, TaskStateModel } from './task.state';
import { TodoAdd } from './task.actions';

describe('Todo store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([TaskState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    const expected: TaskStateModel = {
      items: ['item-1']
    };
    store.dispatch(new TodoAdd('item-1'));
    const actual = store.selectSnapshot(TaskState.getState);
    expect(actual).toEqual(expected);
  });

});

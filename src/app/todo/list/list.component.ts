import {Component, Input, OnInit} from '@angular/core';
import {List} from '../../store/list/list.state';
import {Task} from '../../store/task/task.state';
import {TodoAddAction, TodoCompleteAction, TodoRemoveAction} from '../../store/task/task.actions';
import {Store} from '@ngxs/store';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    @Input() list: List;

    constructor(private store: Store) {
    }

    ngOnInit() {
    }

    create(task: Task) {
        this.store.dispatch(new TodoAddAction(task));
    }

    remove(id: number) {
        this.store.dispatch(new TodoRemoveAction(id));
    }

    complete(id: number) {
        this.store.dispatch(new TodoCompleteAction(id));
    }

}

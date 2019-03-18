import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../../store/task/task.state';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

    @Input() list: Task[];
    @Output() removeChange = new EventEmitter<number>();
    @Output() completeChange = new EventEmitter<number>();

    constructor() {
    }

    ngOnInit() {
    }

    remove(id: number) {
        this.removeChange.emit(id);
    }

    complete(id: number) {
        this.completeChange.emit(id);
    }
}

const x = {
    todos: [{
        name: 'Lista zakupów',
        tasks: [3, 4, 5]
    }, {
        name: 'Lista zadań',
        tasks: [1, 2]
    }],
    tasks: [{
        id: 1,
        name: 'Nauczyć się NGXS',
        completed: true,
    }, {
        id: 2,
        name: 'Zwiedzić świat',
        completed: false,
    }, {
        id: 3,
        name: 'Masło',
        completed: false,
    }, {
        id: 4,
        name: 'Chleb',
        completed: false,
    }, {
        id: 4,
        name: 'Sól',
        completed: false,
    }]
};

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Task} from '../../store/task/task.state';

@Component({
    selector: 'app-new-task',
    templateUrl: './new-task.component.html',
    styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

    @Output() createChange = new EventEmitter<Partial<Task>>();

    newTask = '';

    constructor() {
    }

    ngOnInit() {
    }

    create() {
        if (this.newTask.length > 0) {
            this.createChange.emit({name: this.newTask});
            this.newTask = '';
        }
    }
}

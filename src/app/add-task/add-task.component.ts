import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

  task = {
    label: '',
    priority: 1
  };

  @Output() onAddTask = new EventEmitter();

  addTask($event) {
    $event.preventDefault();
    this.onAddTask.emit({ ...this.task, id: new Date().getTime() });
    this.task.label = "";
  }

}

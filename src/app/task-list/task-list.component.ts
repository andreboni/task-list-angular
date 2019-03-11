import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.scss"]
})
export class TaskListComponent implements OnInit {

  @Input() tasks;
  @Input() filters;
  @Output() onDeleteTask = new EventEmitter();

  processedTasks = [];

  ngOnInit() {
    this.processTasks();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.processTasks();
  }

  deleteTask(id) {
    this.onDeleteTask.emit(id);
  }

  processTasks() {
    this.processedTasks = this.tasks
      .filter(task => {
        const label = task.label.toLowerCase();
        const query = this.filters.query.toLowerCase();
        return label.includes(query);
      })
      .sort((a, b) => {
        const prioritySelected = parseInt(this.filters.priorityOrder);
        if (a.priority > b.priority) return prioritySelected;
        if (a.priority < b.priority) return prioritySelected === -1 ? 1 : -1;
        if (a.priority === b.priority) return 0;
      });
  }
}

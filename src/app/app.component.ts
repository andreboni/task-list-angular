import { Component, ViewChild } from "@angular/core";
import { tasks as tasksData } from 'src/model/tasks';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Todo list";

  @ViewChild("inputField") taskLabel;
  @ViewChild("priorityField") taskPriority;

  priorityOrder = -1;
  query = "";
  tasks = [];

  addTask(inputField, $event) {
    $event.preventDefault();
    this.tasks.push({
      label: this.taskLabel.nativeElement.value,
      priority: parseInt(this.taskPriority.nativeElement.value)
    });
    this.resetForm();
  }

  private resetForm() {
    this.taskLabel.nativeElement.value = "";
    this.taskPriority.nativeElement.value = "1";
  }

  ngDoCheck() {
    this.getTasks();
  }

  getTasks() {
    this.tasks = tasksData
      .filter(task => {
        const label = task.label.toLowerCase();
        const query = this.query.toLowerCase();
        return label.includes(query);
      })
      .sort((a, b) => {
        const prioritySelected = parseInt(this.priorityOrder);
        if (a.priority > b.priority) return prioritySelected;
        if (a.priority < b.priority) return prioritySelected === -1 ? 1 : -1;
        if (a.priority === b.priority) return 0;
      });
  }
}

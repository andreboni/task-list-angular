import { Component } from "@angular/core";
import { getState, setState } from "./util";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Todo list";

  filters = getState("filters") || {
    priorityOrder: -1,
    query: ""
  };

  tasks = getState("tasks") || [];

  filterTasks(obj) {
    this.filters = {
      ...this.filters,
      priorityOrder: obj.priorityOrder,
      query: obj.query
    };
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter(task => {
      return task.id === id ? false : true;
    }).slice();
    setState("tasks", this.tasks);
  }

  addTask(task) {
    this.tasks = [...this.tasks, task];
    setState("tasks", this.tasks);
  }
}

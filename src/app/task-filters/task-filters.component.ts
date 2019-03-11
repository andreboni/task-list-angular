import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { getState, setState } from '../util';

@Component({
  selector: "app-task-filters",
  templateUrl: "./task-filters.component.html",
  styleUrls: ["./task-filters.component.scss"]
})
export class TaskFiltersComponent {
  @Output() onFilter = new EventEmitter();
  @Input() filters;


  onFilterHandler(event) {
    this.onFilter.emit({
      priorityOrder: parseInt(this.filters.priorityOrder),
      query: this.filters.query
    });
    setState('filters', this.filters);
  }
}

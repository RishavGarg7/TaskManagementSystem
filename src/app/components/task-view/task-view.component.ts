import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from '../../store/Task';
// import { AppState,selectAll } from '../../store/task.actions';

// type Task = Array<{
//   title: string;
//   desc: string;
//   duedate: string;
//   priority: string;
//   status: string;
// }>;

@Component({
  selector: 'app-task-view',
  standalone: true,
  imports: [NgFor],
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.css',
})
export class TaskViewComponent implements OnInit {
  // tasks: Task = [
  //   {
  //     title: 'Complete project report',
  //     desc: 'Finalize and submit the project report',
  //     duedate: '2024-07-20',
  //     priority: 'High',
  //     status: 'ToDo',
  //   },
  //   {
  //     title: 'Team meeting',
  //     desc: 'Weekly sync-up with the team',
  //     duedate: '2024-07-18',
  //     priority: 'Medium',
  //     status: 'ToDo',
  //   },
  //   {
  //     title: 'Code review',
  //     desc: 'Review the code for the new feature',
  //     duedate: '2024-07-17',
  //     priority: 'High',
  //     status: 'In Progress',
  //   },
  //   {
  //     title: 'Client presentation',
  //     desc: 'Present the project status to the client',
  //     duedate: '2024-07-19',
  //     priority: 'High',
  //     status: 'ToDo',
  //   },
  //   {
  //     title: 'Update documentation',
  //     desc: "Update the project's technical documentation",
  //     duedate: '2024-07-21',
  //     priority: 'Low',
  //     status: 'In Progress',
  //   },
  //   {
  //     title: 'Testing new feature',
  //     desc: 'Test the new feature before deployment',
  //     duedate: '2024-07-22',
  //     priority: 'Medium',
  //     status: 'In Progress',
  //   },
  //   {
  //     title: 'Budget planning',
  //     desc: 'Plan the budget for the next quarter',
  //     duedate: '2024-07-25',
  //     priority: 'Medium',
  //     status: 'ToDo',
  //   },
  //   {
  //     title: 'Research new tools',
  //     desc: 'Look into new tools for project management',
  //     duedate: '2024-07-30',
  //     priority: 'Low',
  //     status: 'In Progress',
  //   },
  //   {
  //     title: 'Fix bugs',
  //     desc: 'Resolve the bugs reported by the QA team',
  //     duedate: '2024-07-18',
  //     priority: 'High',
  //     status: 'ToDo',
  //   },
  //   {
  //     title: 'Prepare workshop materials',
  //     desc: 'Prepare materials for the upcoming workshop',
  //     duedate: '2024-07-23',
  //     priority: 'Medium',
  //     status: 'In Progress',
  //   },
  //   {
  //     title: 'Complete project report',
  //     desc: 'Finalize and submit the project report',
  //     duedate: '2024-07-20',
  //     priority: 'High',
  //     status: 'ToDo',
  //   },
  //   {
  //     title: 'Team meeting',
  //     desc: 'Weekly sync-up with the team',
  //     duedate: '2024-07-18',
  //     priority: 'Medium',
  //     status: 'ToDo',
  //   },
  //   {
  //     title: 'Code review',
  //     desc: 'Review the code for the new feature',
  //     duedate: '2024-07-17',
  //     priority: 'High',
  //     status: 'In Progress',
  //   },
  //   {
  //     title: 'Client presentation',
  //     desc: 'Present the project status to the client',
  //     duedate: '2024-07-19',
  //     priority: 'High',
  //     status: 'ToDo',
  //   },
  //   {
  //     title: 'Update documentation',
  //     desc: "Update the project's technical documentation",
  //     duedate: '2024-07-21',
  //     priority: 'Low',
  //     status: 'In Progress',
  //   },
  //   {
  //     title: 'Testing new feature',
  //     desc: 'Test the new feature before deployment',
  //     duedate: '2024-07-22',
  //     priority: 'Medium',
  //     status: 'In Progress',
  //   },
  //   {
  //     title: 'Budget planning',
  //     desc: 'Plan the budget for the next quarter',
  //     duedate: '2024-07-25',
  //     priority: 'Medium',
  //     status: 'ToDo',
  //   },
  //   {
  //     title: 'Research new tools',
  //     desc: 'Look into new tools for project management',
  //     duedate: '2024-07-30',
  //     priority: 'Low',
  //     status: 'In Progress',
  //   },
  //   {
  //     title: 'Fix bugs',
  //     desc: 'Resolve the bugs reported by the QA team',
  //     duedate: '2024-07-18',
  //     priority: 'High',
  //     status: 'ToDo',
  //   },
  //   {
  //     title: 'Prepare workshop materials',
  //     desc: 'Prepare materials for the upcoming workshop',
  //     duedate: '2024-07-23',
  //     priority: 'Medium',
  //     status: 'In Progress',
  //   },
  // ];
  // dataSource$: Observable<Task[]> = this.store.select(selectAll);
  // constructor(private store: Store<AppState>) {}
  ngOnInit(): void {}
}

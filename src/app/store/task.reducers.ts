import { createReducer, on } from '@ngrx/store';
import { addTask, deleteTask } from './task.actions';
import { Task } from './Task';

export const initialState: Array<Task> = [
  {
    title: 'Complete project report',
    desc: 'Finalize and submit the project report',
    duedate: '2024-07-20',
    priority: 'High',
    status: 'ToDo',
  },
  {
    title: 'Team meeting',
    desc: 'Weekly sync-up with the team',
    duedate: '2024-07-18',
    priority: 'Medium',
    status: 'ToDo',
  },
  {
    title: 'Code review',
    desc: 'Review the code for the new feature',
    duedate: '2024-07-17',
    priority: 'High',
    status: 'In Progress',
  },
  {
    title: 'Client presentation',
    desc: 'Present the project status to the client',
    duedate: '2024-07-19',
    priority: 'High',
    status: 'ToDo',
  },
  {
    title: 'Update documentation',
    desc: "Update the project's technical documentation",
    duedate: '2024-07-21',
    priority: 'Low',
    status: 'In Progress',
  },
];

export const taskReducer = createReducer(
  initialState,
  on(addTask, (state: any, { item }) => {
    return { ...state, task: [...state.task, item] };
  })
  //   on(deleteTask, (state) => state - 1)
);

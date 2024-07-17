import { createAction, props } from '@ngrx/store';

export const addTask = createAction('[Item] Add Task', props<{ item: any }>());
export const deleteTask = createAction('[Item] Remove Task');

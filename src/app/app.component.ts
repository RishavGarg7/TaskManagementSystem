import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewTaskFormComponent } from './components/new-task-form/new-task-form.component';
import { TaskViewComponent } from './components/task-view/task-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewTaskFormComponent, TaskViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TaskManager';
}

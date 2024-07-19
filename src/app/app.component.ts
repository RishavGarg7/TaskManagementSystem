import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskViewComponent } from './components/task-view/task-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TaskManager';
}

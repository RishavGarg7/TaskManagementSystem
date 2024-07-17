import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-task-form.component.html',
  styleUrl: './new-task-form.component.css',
})
export class NewTaskFormComponent {
  title = new FormControl('');
  desc = new FormControl('');
  duedate = new FormControl('');
  priority = new FormControl('');
  status = new FormControl('');
  taskForm = new FormGroup({
    title: this.title,
    desc: this.desc,
    duedate: this.duedate,
    priority: this.priority,
    status: this.status,
  });
  printdata() {
    event?.preventDefault();
    console.log(this.taskForm.value);
  }
}

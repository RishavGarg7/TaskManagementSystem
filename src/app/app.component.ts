import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

export class Task {
  id: number;
  formtitle: string;
  desc: string;
  duedate: string;
  priority: string;
  status: string;
  constructor() {
    id: 0;
    formtitle: '';
    desc: '';
    duedate: '';
    priority: '';
    status: '';
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, NgFor, NgIf, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'TaskManager';

  // Main Array Initialization
  taskList: Task[] = [];
  ngOnInit(): void {
    const localData = localStorage.getItem('taskData');
    if (localData != null) {
      this.taskList = JSON.parse(localData);
    }
  }

  // Function to Clear Form
  clearForm() {
    this.taskObj = {
      id: 0,
      formtitle: '',
      desc: '',
      duedate: '',
      priority: '',
      status: '',
    };
  }

  // Adding New Data
  taskObj: Task = new Task();
  submitdata() {
    event?.preventDefault();
    console.log(this.taskObj);
    if (
      !this.taskObj.formtitle ||
      !this.taskObj.desc ||
      !this.taskObj.duedate ||
      !this.taskObj.priority ||
      !this.taskObj.status
    ) {
      alert('Please Fill all Details!!');
      return;
    }
    if (!this.editing) {
      const isLocalPresent = localStorage.getItem('taskData');
      if (isLocalPresent != null) {
        const oldTasks = JSON.parse(isLocalPresent);
        this.taskObj.id = oldTasks.length;
        oldTasks.push(this.taskObj);
        this.taskList = oldTasks;
        localStorage.setItem('taskData', JSON.stringify(oldTasks));
      } else {
        const newTasks = [];
        this.taskObj.id = 0;
        newTasks.push(this.taskObj);
        this.taskList = newTasks;
        localStorage.setItem('taskData', JSON.stringify(newTasks));
      }
      this.clearForm();
    } else {
      const currTask = this.taskList.find((m) => m.id === this.taskObj.id);
      if (currTask != undefined) {
        currTask.formtitle = this.taskObj.formtitle;
        currTask.desc = this.taskObj.desc;
        currTask.duedate = this.taskObj.duedate;
        currTask.priority = this.taskObj.priority;
        currTask.status = this.taskObj.status;
      }
      localStorage.setItem('taskData', JSON.stringify(this.taskList));
      this.editing = false;
      this.clearForm();
    }
  }

  // Upadte Existing Task
  editing: boolean = false;
  editTask(task: Task) {
    this.editing = true;
    this.taskObj = task;
  }

  // Deleting Task
  deleteTask(task: Task) {
    if (confirm('Are you sure want to Delete!!')) {
      const currTask = this.taskList.findIndex((m) => m.id === task.id);
      this.taskList.splice(currTask, 1);
      localStorage.setItem('taskData', JSON.stringify(this.taskList));
    } else {
      return;
    }
  }
}

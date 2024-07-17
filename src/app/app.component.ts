import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as XLSX from 'xlsx';
import { ngxCsv } from 'ngx-csv/ngx-csv';

export class Task {
  id: Date;
  formtitle: string;
  desc: string;
  duedate: string;
  priority: string;
  status: string;
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
      id: new Date(),
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
      this.taskObj.id = new Date();
      if (isLocalPresent != null) {
        const oldTasks = JSON.parse(isLocalPresent);
        oldTasks.push(this.taskObj);
        this.taskList = oldTasks;
        localStorage.setItem('taskData', JSON.stringify(oldTasks));
      } else {
        const newTasks = [];
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

  // Sort By
  sortList(value: string) {
    console.log(value);
    if (value == 'duedate') {
      this.taskList.sort((a, b) =>
        a.duedate < b.duedate ? -1 : a.duedate > b.duedate ? 1 : 0
      );
    } else if (value == 'priority') {
      this.taskList.sort((aval, bval) => {
        let s = 0;
        if (aval.priority == bval.priority) {
          s = 0;
        } else if (aval.priority == 'High') {
          s = 1;
        } else if (bval.priority == 'High') {
          s = -1;
        } else if (aval.priority == 'Medium') {
          s = 1;
        } else if (bval.priority == 'Medium') {
          s = -1;
        } else if (aval.priority == 'Low') {
          s = 1;
        } else if (bval.priority == 'Low') {
          s = -1;
        }
        return s;
      });
    } else if (value == 'status') {
      this.taskList.sort((aval, bval) => {
        let s = 0;
        if (aval.status == bval.status) {
          s = 0;
        } else if (aval.status == 'Completed') {
          s = 1;
        } else if (bval.status == 'Completed') {
          s = -1;
        } else if (aval.status == 'In Progress') {
          s = 1;
        } else if (bval.status == 'In Progress') {
          s = -1;
        } else if (aval.status == 'ToDo') {
          s = 1;
        } else if (bval.status == 'ToDo') {
          s = -1;
        }
        return s;
      });
    }
  }

  // Export to XLSX
  fileName = 'TaskList.xlsx';
  exportToXlsx() {
    let data = document.getElementById('table-data');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, this.fileName);
  }

  // Export to CSV
  exportToCsv() {
    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'Task Data',
      useBom: true,
      headers: ['Id', 'Title', 'Description', 'Due Date', 'Priority', 'Status'],
    };

    new ngxCsv(this.taskList, 'Tasks Data', options);
  }
}

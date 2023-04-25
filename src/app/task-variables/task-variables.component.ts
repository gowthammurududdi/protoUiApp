import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-task-variables',
  templateUrl: './task-variables.component.html',
  styleUrls: ['./task-variables.component.css'],
})
export class TaskVariablesComponent implements OnInit {
  taskId: string | null = null;
  variables: any = {};

constructor(private route: ActivatedRoute, private taskService: TaskService) {}

ngOnInit(): void {
  this.route.params.subscribe((params) => {
    this.taskId = params['id'] as string; // Add type assertion here
    console.log('ngOnInit, Task ID:', this.taskId);
    this.getTaskVariables(this.taskId);
  });
}


getTaskVariables(taskId: string): void {
  console.log('getTaskVariables, Task ID:', taskId); // Add this line
  this.taskService.getTaskVariables(taskId).subscribe(
    (variables) => {
      this.variables = variables;
      console.log('getTaskVariables, Variables:', this.variables); // Add this line
    },
    (error) => {
      console.error('getTaskVariables, Error:', error); // Add this line
    }
  );
}

  
  }

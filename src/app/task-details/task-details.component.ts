import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';
import { FORM_MAPPING } from '../form-mapping';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
})
export class TaskDetailsComponent implements OnInit {
  taskId: string = '';
  variables: any;
  @ViewChild('formContainer', { read: ViewContainerRef }) formContainer!: ViewContainerRef;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.taskId = params['id'] as string;
      this.getTaskVariables(this.taskId);
    });
  }

  getTaskVariables(taskId: string): void {
    this.taskService.getTaskVariables(taskId).subscribe((variables) => {
      this.variables = variables;
      this.loadForm();
    });
  }
  



  loadForm() {
    const formKey = this.variables.formKey;
    const mapping = FORM_MAPPING.find((map) => map.key === formKey);

    if (!mapping) {
      return;
    }

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(mapping.component);
    const componentRef = this.formContainer.createComponent(componentFactory);
    componentRef.instance.dataContext = this.variables.dataContext;
  }
}

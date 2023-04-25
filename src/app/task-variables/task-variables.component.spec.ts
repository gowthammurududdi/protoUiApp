import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskVariablesComponent } from './task-variables.component';

describe('TaskVariablesComponent', () => {
  let component: TaskVariablesComponent;
  let fixture: ComponentFixture<TaskVariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskVariablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleFormKeyComponent } from './example-form-key.component';

describe('ExampleFormKeyComponent', () => {
  let component: ExampleFormKeyComponent;
  let fixture: ComponentFixture<ExampleFormKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleFormKeyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleFormKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

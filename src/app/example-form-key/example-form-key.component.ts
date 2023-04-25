import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-form-key',
  templateUrl: './example-form-key.component.html',
  styleUrls: ['./example-form-key.component.css']
})
export class ExampleFormKeyComponent implements OnInit {
  @Input() dataContext: any;
  
  formData = {
    firstName: '',
    lastName: '',
    age: '',
    address: ''
  };


  constructor() { }

 ngOnInit(): void {
    if (this.dataContext) {
      this.formData.firstName = this.dataContext.firstName || '';
      this.formData.lastName = this.dataContext.lastName || '';
      this.formData.age = this.dataContext.age || '';
      this.formData.address = this.dataContext.address || '';
    }
  }
}

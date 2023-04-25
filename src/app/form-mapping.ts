import { Type } from '@angular/core';

import { ExampleFormKeyComponent } from './example-form-key/example-form-key.component'; // Add this line


export interface FormMapping {
  key: string;
  component: Type<any>;
}

export const FORM_MAPPING: FormMapping[] = [

  { key: 'exampleFormKey', component: ExampleFormKeyComponent }, 
  
  // Add more mappings here
];


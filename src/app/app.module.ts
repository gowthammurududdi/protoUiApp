import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskVariablesComponent } from './task-variables/task-variables.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { ExampleFormKeyComponent } from './example-form-key/example-form-key.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskVariablesComponent,
    TaskDetailsComponent,
    ExampleFormKeyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Task {
  id: string;
  name: string;
  assignee: string;
  created: string;
  due: string;
  followUp: string;
  processInstanceId: string;

}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:8080/api/tasks';
  private taskDataUri = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
  
getTaskVariables(taskId: string): Observable<any> {
  const url = `${this.taskDataUri}/${taskId}/variables`;
  return this.http.get<any>(url);
}

}

import { Injectable } from '@angular/core';
import {Task} from './shared/models/task.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TaskService {
  private tasks: Task[] = [];
  constructor() { }

  addTask(newTask: Task): Observable<Task> {
    this.tasks.push(newTask);
    return Observable.of(newTask);
  }
  toggleTaskIsDone(index: number): Observable<boolean> {
    this.tasks[index].isDone =  !this.tasks[index].isDone;
    return Observable.of(true);
  }
  removeTask(index: number): Observable<boolean> {
    this.tasks.splice(index, 1);
    return Observable.of(true);
  }
  getTasks(): Observable<Task[]> {
    return Observable.of(this.tasks);
  }
}

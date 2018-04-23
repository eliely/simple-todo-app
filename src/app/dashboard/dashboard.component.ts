import {Component, OnInit} from '@angular/core';
import {Task} from '../shared/models/task.model';
import {TaskService} from '../task.service';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  taskText: string;
  tasks: Task[];

  constructor(private tasksService: TaskService, private authService: AuthService) {
  }

  ngOnInit() {
    this.tasksService.getTasks().subscribe(
      observer => this.tasks = observer,
      error => console.log(error)
    );
  }

  toggleTaskStatus(index: number) {
    this.tasksService.toggleTaskIsDone(index).subscribe(
      observer => {
        console.log(observer);
        console.log('Task status changed');
      },
      error => console.log(error)
    );
  }

  newTask() {
    if (this.taskText) {
      this.tasksService.addTask(new Task(this.taskText, false)).subscribe(
        observer => {
          console.log(observer);
          this.taskText = '';
        },
        error => console.log(error)
      );

    }
  }

  removeTask(index: number) {
    this.tasksService.removeTask(index).subscribe(
      observer => {
        console.log(observer);
        console.log('Task removed');
      },
      error => console.log(error)
    );
  }

  logout() {
    this.authService.logout();
  }

}

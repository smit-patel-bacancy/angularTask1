import { Component, OnInit, Input } from '@angular/core';
import { ProjectManagerDetails } from './project-manager.model';

@Component({
  selector: 'app-project-manager',
  templateUrl: './project-manager.component.html',
  styleUrls: ['./project-manager.component.css']
})

export class ProjectManagerComponent implements OnInit {
  @Input() details: ProjectManagerDetails[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  style(Salary: number) {
    if (Salary < 10000) {
      return '#0000ff';
    }
    else if (Salary >= 10000 && Salary < 20000) {
      return '#ff0000';
    }
    else if (Salary >= 20000 && Salary < 30000) {
      return '#00ff00';
    }
    else {
      return '#9900ff';
    }
  }
}

import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { DeveloperDetails } from './developer.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})

export class DeveloperComponent implements OnInit {
  @Input()details :  DeveloperDetails[]= [];

  constructor() { }

  ngOnInit(): void {
  }

  style(Salary: number){
    if ( Salary < 10000) {
      return '#0000ff';
    }
    else if ( Salary >= 10000 && Salary < 20000 ) {
      return '#ff0000';
    }
    else if ( Salary >= 20000 && Salary < 30000 ){
      return '#00ff00';
    }
    else {
      return '#9900ff';
    }
  }
}

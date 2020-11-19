import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { DesignerDetails } from './designer.model';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css']
})

export class DesignerComponent implements OnInit {
  @Input()details :  DesignerDetails[]= [];

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

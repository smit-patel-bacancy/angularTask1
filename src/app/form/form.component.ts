import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  FirstName = '';
  LastName = '';
  ContactNo: number;
  Salary: number;
  Designation = '';

  @Output()onSubmit = new EventEmitter<{ FirstName: string, LastName: string, ContactNo: number, Salary: number, Designation: string }>();


  constructor() { }

  ngOnInit(): void {
  }

  onSubmitForm() {
    this.onSubmit.emit({ FirstName: this.FirstName, LastName: this.LastName, ContactNo: this.ContactNo, Salary: this.Salary,Designation: this.Designation });
    this.FirstName = '';
    this.LastName = '';
    this.ContactNo = null;
    this.Salary = null;
    this.Designation = '';
  }

}

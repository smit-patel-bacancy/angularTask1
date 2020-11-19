import { Component } from '@angular/core';
import { DeveloperDetails } from './developer/developer.model';
import { DesignerDetails } from './designer/designer.model';
import { ProjectManagerDetails } from './project-manager/project-manager.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Task1';

  ProjectManagerDetails: ProjectManagerDetails[] = [];
  DeveloperDetails: DeveloperDetails[] = [];
  DesignerDetails: DesignerDetails[] = [];

  onSubmitForm(details: { FirstName: string, LastName: string, ContactNo: number, Designation: string, Salary: number }) {

    if (details.Designation === 'Project-Manager') {
      this.ProjectManagerDetails.push ({
        FirstName: details.FirstName,
        LastName: details.LastName,
        ContactNo: details.ContactNo,
        Designation: details.Designation,
        Salary: details.Salary
      });
    }
    else if (details.Designation === 'Developer') {
      this.DeveloperDetails.push ({
        FirstName: details.FirstName,
        LastName: details.LastName,
        ContactNo: details.ContactNo,
        Designation: details.Designation,
        Salary: details.Salary
      });
    }
    else {
      this.DesignerDetails.push ({
        FirstName: details.FirstName,
        LastName: details.LastName,
        ContactNo: details.ContactNo,
        Designation: details.Designation,
        Salary: details.Salary
      });
    }
  }
}

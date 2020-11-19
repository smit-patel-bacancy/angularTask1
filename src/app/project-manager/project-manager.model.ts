export class ProjectManagerDetails {
   public FirstName: string;
   public LastName: string;
   public ContactNo: number;
   public Designation: string;
   public Salary: number;
   
   constructor(FirstName: string, LastName: string, ContactNo: number, Designation: string, Salary: number){
        this.FirstName=FirstName;
        this.LastName=LastName;
        this.ContactNo=ContactNo;
        this.Designation=Designation;
        this.Salary=Salary;
   }
}
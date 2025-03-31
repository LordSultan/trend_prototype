import { Component, inject, OnInit } from '@angular/core';
import { EmployeeService } from '../employee/employee.service';
import { EmployeeModule } from '../employee/employee.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  employeeService: EmployeeService = inject(EmployeeService);
  currentEmployee!: EmployeeModule;
  route: ActivatedRoute = inject(ActivatedRoute);
  // employeeId!: String;

  constructor() {

    // The settings Page should not allow the user to get to this page if he hasn't logged in.
    // this.currentEmployee = this.employeeService.getCurrentEmployee()!;
    // console.log(this.currentEmployee.firstName);
    // this.employeeId = this.route.snapshot.params["id"];
    // console.log(this.employeeId);
    // this.ngOnInit();
  }

  ngOnInit() {
    // const employeeId = this.route.snapshot.params['id'];
    const employeeId = this.route.snapshot.paramMap.get('id');
    console.log("emplpyee id" ,employeeId)
    console.log("emplpyee id" ,this.route.snapshot.params['id'])
    const cachedEmployee = this.employeeService.getCurrentEmployee();

    if (cachedEmployee) {
      this.currentEmployee = cachedEmployee;
    } else if (employeeId) {
      this.employeeService.getEmployeeModuleById(employeeId).then(employee => {
        if (employee) {
          this.employeeService.setCurrentEmployee(employee);
          this.currentEmployee = employee;
        } else {
          console.error('Employee not found!');
        }
      });

    }


  }

 async saveProfile(id : string, employee: Partial<EmployeeModule>) {
    // Implement save logic here
    console.log('Profile saved', this.currentEmployee);
    await this.employeeService.patchEmployee(id,  employee);
  }
  async cancelEdit(id : string) {
    console.log('Profile deleted', this.currentEmployee);
    await this.employeeService.deleteEmployee(id);

    }






    // async  testCreateAndDelete(){
    //   const newEmployee: EmployeeModule = {
    //     id: '4',
    //     firstName: 'Jane',
    //     lastName: 'Doe',
    //     phoneNumber: '987-654-3210',
    //     email: 'jane.doe@example.com',
    //     position: 'Designer',
    //     image: 'path/to/image.jpg',
    //   };

    //   this.employeeService.addEmployee(newEmployee).then((employee) => {
    //     console.log('Employee added:', employee);
    //     const AllEmployeeModules = this.employeeService.getAllEmployeeModules().then((employeeModules) => {
    //       console.log('All Employee Modules:', employeeModules);
    //       // Delete the added employee
    //       this.employeeService.deleteEmployee(employee.id as string).then(() => {
    //         // console.log('Employee deleted:', employee.id);\
    //         const AllEmployeeModulesedit = this.employeeService.getAllEmployeeModules().then((employeeModules) => {
    //           console.log('All Employee Modules after deletion:', employeeModules);
    //         });
    //       });
    //     });
    //   });
    // }
}



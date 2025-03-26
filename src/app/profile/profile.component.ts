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
    this.ngOnInit();
  }

  ngOnInit() {
    const employeeId = this.route.snapshot.params['id'];
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

  saveProfile() {
    // Implement save logic here
    console.log('Profile saved', this.currentEmployee);
  }
  cancelEdit() {
    throw new Error('Method not implemented.');
    }
}

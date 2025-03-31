import { EmployeeService } from './../employee/employee.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private employeeService: EmployeeService) {}
 mockLogin() {
    // Implement login logic here
    console.log('Login clicked!');
    const employee =  this.employeeService.getEmployeeModuleById('1').then(employee => {
      if (employee) {
        console.log('Employee found:', employee);
        this.employeeService.setCurrentEmployee(employee!);
        const currentEmployee = this.employeeService.getCurrentEmployee();
        console.log('Current Employee:', currentEmployee);

      } else {
        console.error('Employee not found!');
      }
    }
    );


}
}

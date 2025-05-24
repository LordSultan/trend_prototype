import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { EmployeeService } from '../employee/employee.service';
import { EmployeeModule } from '../employee/employee.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  phoneNumber = '';
  error = '';

  constructor(private employeeService: EmployeeService, private router: Router) {}

  async login() {
    const employees = await this.employeeService.getAllEmployeeModules();
    const found = employees.find(
      emp => emp.email === this.email && emp.phoneNumber === this.phoneNumber
    );
    if (found) {
      // Optionally set the current employee in the service
      this.employeeService.setCurrentEmployee(found);
      this.router.navigate(['/profile', found.id]);
    } else {
      this.error = 'Invalid email or phone number.';
    }
  }
}

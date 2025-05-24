import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee/employee.service';
import { EmployeeModule } from '../employee/employee.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  firstName = '';
  lastName = '';
  email = '';
  phoneNumber = '';
  position = '';
  image = '';
  error = '';
  success = '';

  constructor(private employeeService: EmployeeService, private router: Router) {}

  async signUp() {
    const employees = await this.employeeService.getAllEmployeeModules();
    const exists = employees.some(emp => emp.email === this.email);
    if (exists) {
      this.error = 'An account with this email already exists.';
      this.success = '';
      return;
    }
    const newEmployee: EmployeeModule = {
      id: '', // Let backend/database assign the ID
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phoneNumber: this.phoneNumber,
      position: this.position,
      image: this.image
    };
    await this.employeeService.addEmployee(newEmployee);
    this.success = 'Account created! You can now log in.';
    this.error = '';
    // Optionally, redirect to login after a delay:
    // setTimeout(() => this.router.navigate(['/login']), 1500);
  }
}

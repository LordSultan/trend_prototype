import { Component, inject } from '@angular/core';
import { EmployeeService } from './../employee/employee.service';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { EmployeeModule } from '../employee/employee.module';


@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

  currentEmployee? :EmployeeModule;
    employeeService : EmployeeService = inject(EmployeeService);
    router: Router = inject(Router);


  constructor(){
    // this.ngOnInit();
  }

    ngOnInit() {
      this.currentEmployee = this.employeeService.getCurrentEmployee();

      console.log(this.currentEmployee)
      // Access the route parameter
      // this.employeeServies.getAllEmployeeModules().then((employees) => {
      //   this.currentEmployee = employees[0];
      //   console.log(employees);
      // this.employeeServies.setCurrentEmployee(this.currentEmployee);

      // });
    }


    logout() {
  // Clear current employee or authentication info
  // this.employeeService.setCurrentEmployee(undefined);
  this.employeeService.clearCurrentEmployee();
  // Optionally clear tokens or other auth data here
  this.router.navigate(['/login']);
}


}

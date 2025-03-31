import { Component, inject } from '@angular/core';
import { EmployeeService } from './../employee/employee.service';
import { RouterOutlet, RouterModule } from '@angular/router';
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
    employeeServies : EmployeeService = inject(EmployeeService);


  constructor(){
    // this.ngOnInit();
  }

    ngOnInit() {
      this.currentEmployee = this.employeeServies.getCurrentEmployee();

      console.log(this.currentEmployee)
      // Access the route parameter
      // this.employeeServies.getAllEmployeeModules().then((employees) => {
      //   this.currentEmployee = employees[0];
      //   console.log(employees);
      // this.employeeServies.setCurrentEmployee(this.currentEmployee);

      // });
    }

}

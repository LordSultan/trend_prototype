import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { EmployeeService } from './employee/employee.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {


  return inject(EmployeeService).getCurrentEmployee()
  ? true
  : inject(Router).createUrlTree(['/login']);

};

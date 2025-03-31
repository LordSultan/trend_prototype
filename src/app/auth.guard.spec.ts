import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, CanActivateFn, createUrlTreeFromSnapshot, Router, RouterStateSnapshot } from '@angular/router';

import { authGuard } from './auth.guard';
import { EmployeeService } from './employee/employee.service';
import { inject } from '@angular/core';

describe('authGuard', () => {

  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => authGuard(...guardParameters));

  const mockEmployeeService = jasmine.createSpyObj('EmployeeService', ['getCurrentEmployee']);
  const mockRouter = jasmine.createSpyObj('Router', ['navigate', 'createUrlTree']);


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: EmployeeService, useValue: mockEmployeeService },
        { provide: Router, useValue: mockRouter },
      ],
    });
  });


  it('should allow access if the user is authenticated', () => {
    mockEmployeeService.getCurrentEmployee.and.returnValue(
      {
            id: '4',
            firstName: 'Jane',
            lastName: 'Doe',
            phoneNumber: '987-654-3210',
            email: 'jane.doe@example.com',
            position: 'Designer',
            image: 'path/to/image.jpg',
          }
    );


    const mockRoute = {} as ActivatedRouteSnapshot;
    const mockState = {} as RouterStateSnapshot;
    expect(executeGuard(mockRoute, mockState)).toBeTrue();
  });
    it('should deny access and redirect to login if the user is not authenticated', () => {
      // Mock getCurrentEmployee to return null
      mockEmployeeService.getCurrentEmployee.and.returnValue(null);


      const mockRoute = {} as ActivatedRouteSnapshot;
      const mockState: RouterStateSnapshot = {
        url: '/profile/123',
        root: null as any,
      };

      const result = executeGuard(mockRoute, mockState);
      expect(mockRouter.createUrlTree).toHaveBeenCalledWith(['/login']);

    });

});

// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';
// import { EmployeeService } from './employee/employee.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   constructor(private employeeService: EmployeeService, private router: Router) {}

//   canActivate(): boolean {
//     const currentEmployee = this.employeeService.getCurrentEmployee();
//     if (currentEmployee) {
//       return true; // Allow access if the user is authenticated
//     } else {
//       this.router.navigate(['/login']); // Redirect to login page
//       return false; // Deny access
//     }
//   }
// }

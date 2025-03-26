// import { TestBed } from '@angular/core/testing';
// import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

// import { authGuard } from './auth.guard';
// import { EmployeeService } from './employee/employee.service';

// describe('authGuard', () => {
//   const executeGuard: CanActivateFn = (...guardParameters) =>
//     TestBed.runInInjectionContext(() => authGuard(...guardParameters));

//   const mockEmployeeService = jasmine.createSpyObj('EmployeeService', ['getCurrentEmployee']);
//   const mockRouter = jasmine.createSpyObj('Router', ['navigate']);

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [
//         { provide: EmployeeService, useValue: mockEmployeeService },
//         { provide: Router, useValue: mockRouter },
//       ],
//     });
//   });

//   it('should be created', () => {
//     const mockRoute = {} as ActivatedRouteSnapshot;
//     const mockState = {} as RouterStateSnapshot;
//     expect(executeGuard(mockRoute, mockState)).toBeTruthy();
//   });

//   it('should allow access if the user is authenticated', () => {
//     mockEmployeeService.getCurrentEmployee.and.returnValue({ id: 1, name: 'John Doe' });
//     const mockRoute = {} as ActivatedRouteSnapshot;
//     const mockState = {} as RouterStateSnapshot;
//     expect(executeGuard(mockRoute, mockState)).toBeTrue();
//   });

//   it('should deny access and redirect to login if the user is not authenticated', () => {
//     mockEmployeeService.getCurrentEmployee.and.returnValue(null);

//     const mockRoute: ActivatedRouteSnapshot = {
//       params: { id: '1' },
//       queryParams: {},
//       data: {},
//       url: [],
//       fragment: null,
//       outlet: '',
//       component: null,
//       routeConfig: null,
//       root: null as any,
//       parent: null,
//       firstChild: null,
//       children: [],
//       pathFromRoot: [],
//       paramMap: null as any,
//       queryParamMap: null as any,
//       title: undefined
//     };

//     const mockState: RouterStateSnapshot = {
//       url: '/profile/123',
//       root: null as any,
//     };

//     executeGuard(mockRoute, mockState);
//     expect(mockRouter.navigate).toHaveBeenCalledWith(['/login']);
//   });
// });

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

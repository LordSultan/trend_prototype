import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsComponent } from './settings.component';
import { Component, Directive, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { EmployeeService } from '../employee/employee.service';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
// import { ActivatedRoute, Router, RouterLink, RouterModule, provideRouter  } from '@angular/router';
// import { of } from 'rxjs';
// import { By } from '@angular/platform-browser';
// import { RouterTestingModule } from '@angular/router/testing';



// @Directive({
//   selector: '[routerLink]',

// })
// class MockRouterLinkDirective {
//   @Input() routerLink: any;
//   // @Input('routerLink') linkParams: any;
//   // navigatedTo: any = null;

//   // onClick() {
//   //   this.navigatedTo = this.linkParams;
//   // }
// }

// @Component({ standalone: true, selector: 'app-profile', template: '' })
// class ProfileStubComponent {}

// @Component({ standalone: true, selector: 'router-outlet', template: '' })
// class RouterOutletStubComponent {}

// @Component({ standalone: true, selector: 'app-welcome', template: '' })
// class WelcomeStubComponent {}

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;
  let mockEmployeeService: jasmine.SpyObj<EmployeeService>;
  // let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    // Create a spy object for EmployeeService
    mockEmployeeService = jasmine.createSpyObj('EmployeeService', ['getCurrentEmployee', 'getAllEmployeeModules']);

    // Create a spy object for Router
    // mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    // Mock the getAllEmployeeModules method to return a resolved Promise
    mockEmployeeService.getAllEmployeeModules.and.returnValue(
      Promise.resolve([{
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        phoneNumber: '123-456-7890',
        email: 'john.doe@example.com',
        position: 'Developer',
        image: 'path/to/image.jpg'
      }])


    );



    await TestBed.configureTestingModule({
      imports: [SettingsComponent,
        // ProfileStubComponent,
        // RouterLink,
        // provideRouter([]),
        // RouterModule.forRoot([])

      ],
      // schemas: [NO_ERRORS_SCHEMA],

      // declarations: [MockRouterLinkDirective], // Add the mock directive to declarations

       providers: [

              { provide: EmployeeService, useValue: mockEmployeeService }, // Provide the mocked service
              // { provide: Router, useValue: mockRouter }, // Provide the mocked Router

              {
                provide: ActivatedRoute,
                useValue: {
                  // params: of({ id: '1' }), // Mock route parameters
                  // queryParams: of({ query: 'test' }), // Mock query parameters
                  // data: of({ someData: 'value' }), // Mock route data if used
                  // fragment: of('someFragment'), // Mock fragment if used
                  // snapshot: {
                  //   paramMap: {
                  //     get: (key: string) => '1', // Mock snapshot paramMap
                  //   },
                  // },
                },
              },
            ],
    })
  //   .overrideComponent(SettingsComponent, {
  //     set: {
  //       imports: [],

  // },
  // })
  .compileComponents();




  //   fixture.detectChanges(); // trigger initial data binding

  //   // find DebugElements with an attached RouterLinkStubDirective
  //   const linkDes = fixture.debugElement.queryAll(By.directive(RouterLink));

  //   // get attached link directive instances
  //   // using each DebugElement's injector
  //  const  routerLinks = linkDes.map((de) => de.injector.get(RouterLink));

    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should find elements with MyDirective applied', () => {
  //   const debugElements = fixture.debugElement.queryAll(By.directive(MyDirective));
  //   expect(debugElements.length).toBeGreaterThan(0);
  // });

});

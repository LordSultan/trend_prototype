import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileComponent } from './profile.component';
import { EmployeeService } from '../employee/employee.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let mockEmployeeService: jasmine.SpyObj<EmployeeService>;

  beforeEach(async () => {
    //me
    mockEmployeeService = jasmine.createSpyObj('EmployeeService', ['getCurrentEmployee']);

    // Mock the getCurrentEmployee method to return a test employee
    mockEmployeeService.getCurrentEmployee.and.returnValue({
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      phoneNumber: '123-456-7890',
      email: 'john.doe@example.com',
      position: 'Developer',
      image: 'path/to/image.jpg',
    });

    await TestBed.configureTestingModule({
      imports: [ProfileComponent],
      providers: [
        { provide: EmployeeService, useValue: mockEmployeeService },
        {
          provide: ActivatedRoute,
          // useValue: {
          //   params: of({ id: '1' }), // Mock route parameters
          //   queryParams: of({ query: 'test' }), // Mock query parameters
          //   snapshot: {
          //     paramMap: {
          //       get: (key: string) => (key === 'id' ? '1' : null), // Mock snapshot paramMap
          //     },

          //   },
          // },
          useValue: {
            snapshot: {
              params: { id: '1' }, // Mock snapshot.params to include the 'id'
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display employee name', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('John');
  });
});

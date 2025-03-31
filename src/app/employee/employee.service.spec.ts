import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';
import { EmployeeModule } from './employee.module';

describe('EmployeeService', () => {
  let service: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // providers: [EmployeeService],

    });
    service = TestBed.inject(EmployeeService);
  });

  afterEach(() => {
    // jest.restoreAllMocks(); // Restore original fetch behavior after each test
    // Reset all spies
  // spyOn(window, 'fetch').calls.reset();
  // jasmine.restoreAllSpies();
  // (window.fetch as jasmine.Spy).and.callThrough();

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should return employee name', () => {
  //   expect(service.getEmployeeName()).toBe('John Doe');
  // });


  it('should add an employee', async () => {
    const newEmployee: EmployeeModule = {
      id: '4',
      firstName: 'Jane',
      lastName: 'Doe',
      phoneNumber: '987-654-3210',
      email: 'jane.doe@example.com',
      position: 'Designer',
      image: 'path/to/image.jpg',
    };

    const mockResponse = new Response(JSON.stringify(newEmployee), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });

    spyOn(window, 'fetch').and.returnValue(Promise.resolve(mockResponse));

    const result = await service.addEmployee(newEmployee);

    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3000/employees', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newEmployee),
    });
    expect(result).toEqual(newEmployee);
  });

  it('should update an employee', async () => {
    const updatedEmployee: EmployeeModule = {
      id: '1',
      firstName: 'John',
      lastName: 'Smith',
      phoneNumber: '123-456-7890',
      email: 'john.smith@example.com',
      position: 'Senior Developer',
      image: 'path/to/image.jpg',
    };

    const mockResponse = new Response(JSON.stringify(updatedEmployee), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

    spyOn(window, 'fetch').and.returnValue(Promise.resolve(mockResponse));

    const result = await service.updateEmployee('1', updatedEmployee);

    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3000/employees/1', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedEmployee),
    });
    expect(result).toEqual(updatedEmployee);
  });

  it('should partially update an employee', async () => {
    const partialUpdate = { position: 'Lead Developer' };
    const updatedEmployee: EmployeeModule = {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      phoneNumber: '123-456-7890',
      email: 'john.doe@example.com',
      position: 'Lead Developer',
      image: 'path/to/image.jpg',
    };

    const mockResponse = new Response(JSON.stringify(updatedEmployee), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

    spyOn(window, 'fetch').and.returnValue(Promise.resolve(mockResponse));

    const result = await service.patchEmployee('1', partialUpdate);

    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3000/employees/1', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(partialUpdate),
    });
    expect(result).toEqual(updatedEmployee);
  });

  it('should delete an employee', async () => {
    const mockResponse = new Response(null, { status: 204 });

    spyOn(window, 'fetch').and.returnValue(Promise.resolve(mockResponse));

    await service.deleteEmployee('1');

    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3000/employees/1', {
      method: 'DELETE',
    });
  });


});

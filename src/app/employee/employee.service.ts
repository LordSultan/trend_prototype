import { Injectable } from '@angular/core';
import { EmployeeModule } from './employee.module';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private currentEmployee?: EmployeeModule;

  url = 'http://localhost:3000/employees';

  async getAllEmployeeModules(): Promise<EmployeeModule[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
  // getAllEmployeeModules(): EmployeeModule[] {
  //   return this.EmployeeModuleList;
  // }
  async getEmployeeModuleById(id: string): Promise<EmployeeModule | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  async addEmployee(employee: EmployeeModule): Promise<EmployeeModule> {
    const response = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employee),
    });
    return await response.json();
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
    // alert(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`)
  }

  constructor() { }
  setCurrentEmployee(employee: EmployeeModule): void {
    this.currentEmployee = employee;
    localStorage.setItem('currentEmployee', JSON.stringify(employee)); // Save to localStorage
  }

  getCurrentEmployee(): EmployeeModule | undefined {
    try {
      if (!this.currentEmployee) {
        const storedEmployee = localStorage.getItem('currentEmployee');
        if (storedEmployee) {
          this.currentEmployee = JSON.parse(storedEmployee);
        }
      }
    } catch (error) {
      console.error('Error retrieving current employee from localStorage:', error);
      localStorage.removeItem('currentEmployee'); // Clear corrupted data
    }
    return this.currentEmployee;
  }

  clearCurrentEmployee(): void {
    this.currentEmployee = undefined;
    localStorage.removeItem('currentEmployee');
  }
  async updateEmployee(id: string, updatedEmployee: EmployeeModule): Promise<EmployeeModule> {
    const response = await fetch(`${this.url}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedEmployee),
    });
    return await response.json();
  }


  async patchEmployee(id: string, partialUpdate: Partial<EmployeeModule>): Promise<EmployeeModule> {
    const response = await fetch(`${this.url}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(partialUpdate),
    });
    return await response.json();
  }

  async deleteEmployee(id: string): Promise<void> {
    await fetch(`${this.url}/${id}`, {
      method: 'DELETE',
    });
  }
}

import { TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

describe('LoginComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, RouterModule],
      providers: [
        { provide: ActivatedRoute, useValue: {} } // Provide a mock or stub
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});

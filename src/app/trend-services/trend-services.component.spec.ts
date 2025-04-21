import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendServicesComponent } from './trend-services.component';

describe('TrendServicesComponent', () => {
  let component: TrendServicesComponent;
  let fixture: ComponentFixture<TrendServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

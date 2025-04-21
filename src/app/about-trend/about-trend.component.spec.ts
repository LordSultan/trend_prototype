import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTrendComponent } from './about-trend.component';

describe('AboutTrendComponent', () => {
  let component: AboutTrendComponent;
  let fixture: ComponentFixture<AboutTrendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutTrendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

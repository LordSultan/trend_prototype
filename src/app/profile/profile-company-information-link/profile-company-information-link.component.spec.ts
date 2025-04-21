import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCompanyInformationLinkComponent } from './profile-company-information-link.component';

describe('ProfileCompanyInformationLinkComponent', () => {
  let component: ProfileCompanyInformationLinkComponent;
  let fixture: ComponentFixture<ProfileCompanyInformationLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileCompanyInformationLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileCompanyInformationLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

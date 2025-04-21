import { Component, Input } from '@angular/core';




@Component({
  selector: 'app-profile-company-information-link',
  standalone: true,
  imports: [],
  templateUrl: './profile-company-information-link.component.html',
  styleUrl: './profile-company-information-link.component.scss'
})


export class ProfileCompanyInformationLinkComponent {
  @Input() icon: string = ''; // Path to the icon
  @Input() alt: string = ''; // Alt text for the icon



}

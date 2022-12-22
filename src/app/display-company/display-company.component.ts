import { Component } from '@angular/core';
import { Company } from '../Company';

@Component({
  selector: 'app-display-company',
  templateUrl: './display-company.component.html',
  styleUrls: ['./display-company.component.css']
})
export class DisplayCompanyComponent {
  company!:Company;
  latitude=51.678418;
  longitude=7.809007;
}

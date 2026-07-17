import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-by-vine-details',
  imports: [CommonModule],
  templateUrl: './by-vine-details.component.html',
  styleUrl: './by-vine-details.component.scss',
})
export class ByVineDetailsComponent {
  
  public carInfoFromObj = input<any>();
  

}

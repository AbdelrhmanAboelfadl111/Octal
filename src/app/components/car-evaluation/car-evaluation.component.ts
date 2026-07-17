import { Component, inject, input } from '@angular/core';
import { CarsService } from '../../services/CarsService.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-car-evaluation',
  imports: [CommonModule],
  templateUrl: './car-evaluation.component.html',
  styleUrl: './car-evaluation.component.scss',
})
export class CarEvaluationComponent {
  public reloadPage() {
    window.location.reload();
  }

  public priceFromHead = input<number>();
  
  public carInfoFromObj = input<any>();

  public errorFromHead = input<string>();

}

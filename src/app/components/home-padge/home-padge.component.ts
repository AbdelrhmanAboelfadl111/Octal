import { Component } from '@angular/core';
import { UpperHeadComponent } from "../upper-head/upper-head.component";
import { MainHeadComponent } from "../main-head/main-head.component";
import { CarEvaluationComponent } from "../car-evaluation/car-evaluation.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home-padge',
  imports: [UpperHeadComponent, MainHeadComponent, CarEvaluationComponent, FooterComponent],
  templateUrl: './home-padge.component.html',
  styleUrl: './home-padge.component.scss',
})
export class HomePadgeComponent {
  public title: string = "استعلم عن السعر المتوقع بمواصفات سيارتك";
  public brief: string = "حدد مواصفات المركبة بدقة، وسيقوم النظام بحساب القيمة السوقية المتوقعة اعتمادًا على أحدث بيانات السوق المصري";
}

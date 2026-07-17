import { Component } from '@angular/core';
import { UpperHeadComponent } from "../../upper-head/upper-head.component";
import { FooterComponent } from "../../footer/footer.component";
import { ByVineInputsComponent } from "../by-vine-inputs/by-vine-inputs.component";

@Component({
  selector: 'app-by-vin-padge',
  imports: [ FooterComponent, ByVineInputsComponent],
  templateUrl: './by-vin-padge.component.html',
  styleUrl: './by-vin-padge.component.scss',
})
export class ByVinPadgeComponent {
    public title: string = "استعلم عن السعر المتوقع برقم الشاسيه الخاص  بسيارتك";
  public brief: string = "ادخل رقم الشاسيه بدقة، وسيقوم النظام بعرض البيانات واحتساب القيمة السوقية المتوقعة اعتمادًا على أحدث بيانات السوق المصري";
}

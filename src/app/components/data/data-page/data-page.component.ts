import { Component, signal } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';
import { UpperHeadComponent } from '../../upper-head/upper-head.component';
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-data-page',
  imports: [LoginFormComponent, UpperHeadComponent, FooterComponent],
  templateUrl: './data-page.component.html',
  styleUrl: './data-page.component.scss',
})
export class DataPageComponent {
  public title = signal("هذه الصفحة مخصصة لمديرين أوكتال ");
  public supTitle = signal("من فضلك ادخل الرقم السري المدعوم من مطورين أوكتال للحصول على بيانات تلك الصفحه");
  public dataFromApiArrived = signal(false);
}

import { Component, signal } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';
import { UpperHeadComponent } from '../../upper-head/upper-head.component';
import { FooterComponent } from "../../footer/footer.component";
import { OperationLog, OperationsLogComponent } from "../opreations/operationslog.component";

@Component({
  selector: 'app-data-page',
  imports: [LoginFormComponent, UpperHeadComponent, FooterComponent, OperationsLogComponent],
  templateUrl: './data-page.component.html',
  styleUrl: './data-page.component.scss',
})
export class DataPageComponent {
  public title = signal("هذه الصفحة مخصصة لمديرين أوكتال ");
  public supTitle = signal("من فضلك ادخل الرقم السري المدعوم من مطورين أوكتال للحصول على بيانات تلك الصفحه");
  public dataFromApiArrived = signal(false);
  logs = signal<OperationLog[]>([]);
  onLogsLoaded(data: OperationLog[]) {
    this.logs.set(data);
  }
  public VarFromChild($event: boolean) {
    this.dataFromApiArrived.set($event)
  }
}

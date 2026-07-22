import { HttpClient } from '@angular/common/http';
import { Component, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OperationLog } from '../opreations/operationslog.component';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  public isTypedSecretKey = signal<boolean>(false);
  private http = inject(HttpClient);
  public apiKey = "";
  public errorFromXapi = "";
  public isError = signal(false);
  public sendRequest = signal<boolean>(false);
  public logsLoaded = output<OperationLog[]>();
  public ChangeActiveInParent=output<boolean>()
  public isLoading = signal(false);
  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.isTypedSecretKey.set(value.length > 0);
    this.isError.set(false);
    this.isLoading.set(false);
    this.sendRequest.set(value.length > 0);
    this.errorFromXapi = "";
}

  public getLogs() {
    if (this.sendRequest()) {
          this.isLoading.set(true);
            this.http.get("https://api-car-prediction-main-a3411d6d.fastapicloud.dev/logs", { headers: { 'X-API-KEY': this.apiKey } }).subscribe({
              next: (res:any) => {
                console.log(res);
                this.isTypedSecretKey.set(true);
                this.ChangeActiveInParent.emit(this.isTypedSecretKey());
                this.logsLoaded.emit(res);
                this.isLoading.set(false);
            },
              error: (err) => {
                this.isError.set(true);
                this.errorFromXapi = err.error.detail;
                this.isLoading.set(false);
            }
        });;
    }
  }
}

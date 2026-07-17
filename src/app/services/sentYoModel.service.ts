import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface PredictionResponse {
  predicted_price: number;
}

@Injectable({
  providedIn: 'root'
})
export class SendToModelService {

  private http = inject(HttpClient);

  private apiUrl = 'https://churn-detection-classification-project.fastapicloud.dev/predict/linear';

  sendData(data: any) {
    return this.http.post<PredictionResponse>(this.apiUrl, data);
  }
}
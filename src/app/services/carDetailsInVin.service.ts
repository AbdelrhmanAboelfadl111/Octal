import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface PredictionResponse {
    predicted_price: number;
}

@Injectable({
    providedIn: 'root'
})
export class CarVinDetails {

    private http = inject(HttpClient);

    private apiUrl = 'https://api-car-prediction-main-a3411d6d.fastapicloud.dev/predict/from-vin';

    sendData(data: any) {
        return this.http.post<PredictionResponse>(this.apiUrl, data);
    }
}
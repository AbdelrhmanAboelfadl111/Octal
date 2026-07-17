import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

    private http = inject(HttpClient);

    getCars() {
        return this.http.get<any>('assets/car_dependency_map.json');
    }

}
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DollarPrice {

    private http = inject(HttpClient);

    dollarRate = toSignal(
        this.http.get<any>('https://api.frankfurter.dev/v2/rate/USD/EGP').pipe(
            map(res => res.rate)
        ),
        {
            initialValue: 1
        }
    );

}
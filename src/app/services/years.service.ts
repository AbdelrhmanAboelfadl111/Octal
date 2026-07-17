import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class YearService {

    years = signal<number[]>(
        Array.from({ length: 2025 - 2005 + 1 }, (_, i) => 2025 - i)
    );

}
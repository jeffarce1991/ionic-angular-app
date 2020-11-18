import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({ providedIn: 'root'})
export class BookingsService {
    private _bookings: Booking[] = [
        {
            id: 'xyz',
            placeId: 'p1',
            userId: 'abc',
            placeTitle: 'Prontera',
            guestNumber: 2
        }
    ];

    get bookings() {
        return [...this._bookings]
    }
}
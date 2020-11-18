import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

export class Booking {
    constructor(
        public id: string,
        public placeId: string,
        public userId: string,
        public placeTitle: string,
        public guestNumber: number) {

    }
}
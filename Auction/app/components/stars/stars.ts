import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'auction-stars',
    templateUrl: 'app/components/stars/stars.html',
    styleUrls: [' .starrating { color: #d17581; } ']
})
export default class StarsComponent {
    private _rating: number;
    private stars: boolean[] = [];
    private maxStars: number = 5;

    @Input() readonly: boolean = true;
    @Input() count: number = 5;
    @Input() get rating(): number {
        return this._rating;
    };    

    set rating(value: number) {
        this._rating = value;
        this.stars = Array(this.maxStars).fill(true, 0, this.rating);
    }

    @Output() ratingChange: EventEmitter<number> = new EventEmitter();

    fillStarsWithColour(index: number) {
        if (!this.readonly) {
            this.rating = index + 1;
            this.ratingChange.emit(this.rating);
        }
    }
}
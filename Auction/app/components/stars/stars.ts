import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'auction-stars',
    templateUrl: 'app/components/stars/stars.html',
    styleUrls: [' .starrating { color: #d17581; } ']
})
export default class StarsComponent implements OnInit {
    @Input() count: number = 5;
    @Input() rating: number = 0;
    stars: boolean[] = [];

    // Is called only once, right after the component’s data-bound properties have been checked for the first time, and before
    // any of its children have been checked
    // All of the parent's properties are initialized
    ngOnInit() { 
        for (let i = 1; i <= this.count; i++) {
            this.stars.push(i > this.rating);
        }
    }
}
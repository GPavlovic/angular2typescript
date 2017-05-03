import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'auction-product-page',
    template: `
        <div>
            <img src="http://placeholder.it/820x320">
            <h4>{{productTitle}}</h4>
        </div>
        `
})
export default class ProductDetailCompontent {
    productTitle: string;

    constructor(route: ActivatedRoute) {
        this.productTitle = route.snapshot.params['prodTitle'];
    }
}
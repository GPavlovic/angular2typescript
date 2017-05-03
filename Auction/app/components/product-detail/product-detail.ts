import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService, Product, Review} from '../../services/product-service';

@Component({
    selector: 'auction-product-page',
    templateUrl: 'app/components/product-detail/product-detail.html'
})
export default class ProductDetailCompontent {
    product: Product;
    reviews: Review[];

    constructor(
        route: ActivatedRoute,
        productService: ProductService
    ) {
        let productId: number = +route.snapshot.params['productId'];
        this.product = productService.getProductById(productId);
        this.reviews = productService.getReviewsForProduct(this.product.id);
    }
}
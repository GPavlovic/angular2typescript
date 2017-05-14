import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService, Product, Review} from '../../services/product-service';
import StarsComponent from '../stars/stars';

@Component({
    selector: 'auction-product-page',
    styles: ['auction-stars.large {font-size: 24px;}'],
    templateUrl: 'app/components/product-detail/product-detail.html'
})
export default class ProductDetailCompontent {
    product: Product;
    reviews: Review[];

    newComment: string;
    newRating: number;

    isReviewHidden = true;

    constructor(
        route: ActivatedRoute,
        productService: ProductService
    ) {
        let productId: number = +route.snapshot.params['productId'];
        this.product = productService.getProductById(productId);
        this.reviews = productService.getReviewsForProduct(this.product.id);
    }

    addReview() {
        let review = new Review(0, this.product.id, new Date(), 'Anonymous', this.newRating, this.newComment);
        console.log("adding review " + JSON.stringify(review));
        this.reviews = [...this.reviews, review];
        this.product.rating = this.averageRating(this.reviews);
        this.resetForm();
    }

    private averageRating(reviews: Review[]) {
        let sum = reviews.reduce((average, review) => average + review.rating, 0);
        return sum / reviews.length;
    }

    private resetForm() {
        this.newRating = 0;
        this.newComment = null;
        this.isReviewHidden = true;
    }
}
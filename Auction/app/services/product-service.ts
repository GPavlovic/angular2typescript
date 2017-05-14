export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public description: string,
    public categories: Array<string>) {
  }
}

export class Review {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: Date,
    public user: string,
    public rating: number,
    public comment: string) {}
}

export class ProductService {

  getProducts(): Array<Product> {
    return products.map(p => new Product(p.id, p.title, p.price, p.rating, p.description, p.categories));
  }

  getProductById(productId: number): Product {
    return products.find(p => p.id === productId);
  }
  getReviewsForProduct(productId: number): Review[] {
  return reviews
    .filter(r => r.productId === productId)
    .map(r => new Review(r.id, r.productId, new Date(r.timestamp), r.user, r.rating, r.comment));
  }

  getAllCategories(): string[] {
    return ['Books', 'Electronics', 'Hardware'];
  }

}

var products = [
  {
    "id": 0,
    "title": "First Product",
    "price": 24.99,
    "rating": 4.3,
    "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "categories": ["electronics", "hardware"]
  },
  {
    "id": 1,
    "title": "Second Product",
    "price": 64.99,
    "rating": 3.5,
    "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "categories": ["books"]
  }
];

var reviews = [
  {
  "id": 0,
  "productId": 0,
  "timestamp": "2014-05-20T02:17:00+00:00",
  "user": "User 1",
  "rating": 5,
  "comment": "Aenean vestibulum velit id placerat posuere. Praesent..."},
  {
  "id": 1,
  "productId": 0,
  "timestamp": "2014-05-20T02:53:00+00:00",
  "user": "User 2",
  "rating": 3,
  "comment": "Aenean vestibulum velit id placerat posuere. Praesent... "
  }
];

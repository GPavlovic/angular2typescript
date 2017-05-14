import {Component} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ProductService } from '../../services/product-service'

@Component({
  selector: 'auction-search',
  templateUrl: 'app/components/search/search.html',
  providers: [ProductService]
})
export default class SearchComponent {
      formModel: FormGroup;
      categories: string[];

    constructor(productService: ProductService, formBuilder: FormBuilder) {
      this.categories = productService.getAllCategories();
      this.formModel = formBuilder.group({
          'title': [null, Validators.minLength(3)],
          'price': [null, this.positiveNumberValidator],
          'category': [-1]
      });
    }

    onSearch() {
      if (this.formModel.valid){
        console.log(this.formModel.value);
      }
    }

    positiveNumberValidator(control: FormControl): {[key: string]: any} {
      if (!control.value) {
        return null;
      }
      const price = parseInt(control.value);
      return price === null || typeof price === 'number' && price > 0 ? null : {positiveNumber: true}; 
    }
}

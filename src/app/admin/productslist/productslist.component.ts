import {Component, OnInit} from '@angular/core';
import {ProductBackendService} from '../../services/backend-data/product-backend.service';
import {mockedProducts} from '../../services/mockedData/productLists';
import {forEach} from '@angular/router/src/utils/collection';
import {mockedCategories} from '../../services/mockedData/categoryList';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {
  productList: any[] = [];
  products: any[] = [];
  filterdProducts: any[] = [];
  category$: string;


  constructor(private productBackendService: ProductBackendService, private  route: ActivatedRoute) {
    this.productBackendService.getAllData().subscribe(product=>{
      this.products=product;
      route.queryParamMap.subscribe(params => {
        this.category$ = params.get('filteredCategor');
    //
        this.filterdProducts = (this.category$) ?
          this.products.filter(p => p.category === this.category$) :
          this.products;
      });
    });
    this.products = mockedProducts;
    route.queryParamMap.subscribe(params => {
      this.category$ = params.get('filteredCategor');

      this.filterdProducts = (this.category$) ?
        this.products.filter(p => p.category === this.category$) :
        this.products;
    });
    console.log(this.filterdProducts);
  }

  ngOnInit() {
  }

  getProductList() {
    this.productBackendService.getAllData().subscribe(item => {
      console.log("item = ", item);
      this.productList = item;
    });
    return this.productBackendService.getAllData();
  }

}

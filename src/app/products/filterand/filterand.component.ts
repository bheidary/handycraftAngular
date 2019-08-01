import { Component } from '@angular/core';
import {mockedProducts} from '../../services/mockedData/productLists';
import {ProductBackendService} from '../../services/backend-data/product-backend.service';

export interface IUser {
  lat: number;
  price: number;
  productDateIn: string;
  category: string;
}

@Component({
  selector: 'app-filterand',
  templateUrl: './filterand.component.html',
  styleUrls: ['./filterand.component.css']
})
export class FilterandComponent {
  latSearch = '';
  priceSearch = '';
  productDateInSearch = '';
  categorySearch = '';
  data: any[] = [];
/*
  data = [
    { lat: 'Name 1', price: 'name1@example.com', productDateIn: 'Developer', category: 'ABC' },
    { lat: 'Name 2', price: 'name2@example.com', productDateIn: 'Tester', category: 'ABC'},
    { lat: 'Name 3', price: 'name3@example.com', productDateIn: 'BRM', category: 'ABC'},
    { lat: 'Name 4', price: 'name4@example.com', productDateIn: 'Account Manager', category: 'ABC'},
    { lat: 'Name 5', price: 'name5@example.com', productDateIn: 'UX Designer', category: 'ABC'},
    { lat: 'Name 8', price: 'name8@example.com', productDateIn: 'Developer', category: 'ABC'},
    { lat: 'Name 9', price: 'name9@example.com', productDateIn: 'Developer', category: 'ABC'},
    { lat: 'Name 10', price: 'name10@example.com', productDateIn: 'Tech Lead', category: 'BCD'},
  ];
  */
  constructor(private productBackendService: ProductBackendService) {
    this.data = mockedProducts;
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import {formatDate,DatePipe } from '@angular/common';
import {ProductBackendService} from '../../services/backend-data/product-backend.service';
import {HttpClient} from '@angular/common/http';

export interface IUser {
  lat: string;
  category: string;
  priceSearchMin: number;
  priceSearchMax: number;
  productDateInSearch:string;
  productDateInSearch2:string;
  price:number;
}

@Pipe({
  name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}
  transform(
    users: IUser[],
    latSearch?: string,
    categorySearch?: string,
    priceSearch?: number,
    priceSearch2?: number,
    productDateInSearch?: string,
    productDateInSearch2?: string,
    price?:number,
  ): IUser[] {

    console.log('users1234567789....',users);
    console.log('latSearch-->',latSearch);
    console.log('categorySearch-->',categorySearch);
    console.log('priceSearch-->',priceSearch);
    console.log('priceSearch2-->',priceSearch2);
    console.log('price-->',price);
    console.log('productDateInSearch2-->',productDateInSearch2);
    console.log('productDateInSearch-->',productDateInSearch);

    if (!users) return [];
    if(!latSearch && !priceSearch && !productDateInSearch && !categorySearch) return users;
    if (latSearch) {
     // users = [...users.filter(user => user.lat===latSearch)];
      users = [...users.filter(user => Number(user.lat)===0)];
    }
    if (priceSearch) {
      users = [...users.filter(user => Number(user.price)>=Number(priceSearch))];
    }
    if (priceSearch2) {
      users = [...users.filter(user => Number(user.price)<=Number(priceSearch2))];
    }


    console.log('productDateInSearch1-->',productDateInSearch);
 //   console.log('productDateInSearch2-->',this.datePipe.transform(productDateInSearch,"yyyy-MM-dd"));
    console.log('productDateInSearch3-->',productDateInSearch2);
  //  console.log('productDateInSearch4-->',this.datePipe.transform(productDateInSearch2,"yyyy-MM-dd"));




    // if (productDateInSearch) {
    //   users = [...users.filter(user =>{
    //     console.log('11',this.datePipe.transform(user.productDateIn,"yyyy-MM-dd"));
    //     console.log('12',this.datePipe.transform(productDateInSearch,"yyyy-MM-dd"));
    //     this.datePipe.transform(user.productDateIn,"yyyy-MM-dd")<=this.datePipe.transform(productDateInSearch,"yyyy-MM-dd");
    //   })];
    // }
    // if (productDateInSearch2) {
    //   users = [...users.filter(user =>{
    //     // productDateInSearch=this.datePipe.transform(this.productDateInSearch,"yyyy-MM-dd");
    //     this.datePipe.transform(user.productDateIn,"yyyy-MM-dd")>=this.datePipe.transform(productDateInSearch2,"yyyy-MM-dd");
    //   })];
    // }
    console.log('users7..>..>',users);






    // console.log('priceSearch2..>..>',priceSearch2);
    // if (priceSearch2) {
    //   users = [...users.filter(user => {
    //     console.log('users1....',users);
    //     console.log('user1....',user);
    //     console.log('user.price..>..>',user.price);
    //     user.price<=priceSearch2;
    //   })];
    // }
    // console.log('users5..>..>',users);













    // if (productDateInSearch) {
    //   users = [...users.filter(user => user.productDateIn>=productDateInSearch)];
    // }
    // console.log('users6..>..>',users);
    // if (productDateInSearch2) {
    //   users = [...users.filter(user => user.productDateIn2<=productDateInSearch2)];
    // }
    // console.log('users7..>..>',users);



    if (categorySearch) {
      categorySearch = categorySearch.toLocaleLowerCase();
      users = [...users.filter(user => user.category.toLocaleLowerCase().includes(categorySearch))];
    }
    return users;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

export interface IUser {
  place: string;
  price1: string;
  price2: string;
  date: string;
  category: string;
}

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(
    users: IUser[],
    placeSearch?: string,
    priceSearch1?: string,
    priceSearch2?: string,
    dateSearch?: string,
    categorySearch?: string
  ): IUser[] {

    if (!users) return [];
    if (!placeSearch) return users;
    placeSearch = placeSearch.toLocaleLowerCase();
    users = [...users.filter(user => user.place.toLocaleLowerCase().includes(  placeSearch))];

    if (!priceSearch1) return users;
    priceSearch1 = priceSearch1.toLocaleLowerCase();
    users = [...users.filter(user => user.price1.toLocaleLowerCase().includes(priceSearch1))];

    if (!priceSearch2) return users;
    priceSearch2 = priceSearch2.toLocaleLowerCase();
    users = [...users.filter(user => user.price2.toLocaleLowerCase().includes(priceSearch2))];

    if (!dateSearch) return users;
    dateSearch = dateSearch.toLocaleLowerCase();
    users = [...users.filter(user => user.date.toLocaleLowerCase().includes(dateSearch))];


    if (!categorySearch) return users;
    categorySearch = categorySearch.toLocaleLowerCase();
    users = [...users.filter(user => user.category.toLocaleLowerCase().includes(categorySearch))];

    return users;
  }
}

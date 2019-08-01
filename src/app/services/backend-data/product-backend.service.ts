import {Injectable} from '@angular/core';

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs-compat/operator/map';

import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ProductBackendService {
  // private token = 'Basic ';
  const;
  headers = new HttpHeaders().set('Accept', 'application/json')
    .set('Accept', 'application/json');
  // .set('Authorization', this.token);

  // URI='http://handy-demo-handcraft.7e14.starter-us-west-2.openshiftapps.com/v1/pr/products';
  URI = 'http://crafty-crafti.e4ff.pro-eu-west-1.openshiftapps.com';

  constructor(private http: HttpClient) {
  }

  //////////////////////////////////////////////////////Get All Products///////////////////////////
  getAllData(): Observable<any> {

    return this.http.get(this.URI + '/v1/pr/products', {headers: this.headers});
  }

  /////////////////////////////////////////search in product name and categories and keywords///////////////////////////
  searchproduct(searchtext): Observable<any> {
    return this.http.get(this.URI + '/v1/pr/products/search?searchItem=' + searchtext, {headers: this.headers});
  }

  //////////////////////////////////////////////////////Get All Sellers///////////////////////////
  getAllSellers(): Observable<any> {
    return this.http.get(this.URI + '/v1/se/users', {headers: this.headers});
  }

  // TODO change the backend to return false if email exist , change to observable
  /////////////////////////////////////////////////////  Add  user   ////////////////////////////////
  saveSeller(seller) {
    return this.http.post(this.URI + '/v1/se/users/', seller, {headers: this.headers}).subscribe(
      val => {
        console.log('POST call successful value returned in body',
          val);
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
      }
    );
  }


  /////////////////////////////////////////////////////  signup new user   ////////////////////////////////
  saveSellerSignUp(seller):Observable<any> {
    return this.http.post(this.URI + '/v1/se/users/', seller, {headers: this.headers});
    // (
    //   val => {
    //     console.log('POST call successful value returned in body',
    //       val);
    //   },
    //   response => {
    //     console.log('POST call in error', response);
    //   },
    //   () => {
    //     console.log('The POST observable is now completed.');
    //   }
    // );
  }
  ///////////////////////////////////////// Get Seller By ID ////////////////////////////
  getSellerById(SellerID): Observable<any> {
    return this.http.get(this.URI + '/v1/se/users/' + SellerID, {headers: this.headers});
  }

  //////////////////////////////////// ///// Get Seller By Email ////////////////////////////
  getSellerByEmail(SellerEmail): Observable<any> {
    return this.http.get(this.URI + '/v1/se/users/email/' + SellerEmail, {headers: this.headers});
  }

  ///////////////////////////////////////// Update Seller ////////////////////////////
  updateSeller(seller) {
    return this.http.post(this.URI + '/v1/se/users', seller, {headers: this.headers}).subscribe(
      val => {
        console.log('POST call successful value returned in body',
          val);
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
      }
    );
  }

////////////////////////////////////////////////////  //////////////////////////////////////
  private extractData(res: any) {

    const body = res.json();
    return body || [];
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  //////////////////////////////////////////////////////Save Product///////////////////////////
  saveProduct(product): Observable <any> {
    return this.http.post(this.URI + '/v1/pr/products', product, {headers: this.headers});
    //   .subscribe(
    //   val => {
    //     console.log('POST call successful value returned in body',
    //       val);
    //   },
    //   response => {
    //     console.log('POST call in error', response);
    //   },
    //   () => {
    //     console.log('The POST observable is now completed.');
    //   }
    // );
  }

  //////////////////////////////////////////////////////update Product///////////////////////////
  updateProduct(productid, product) {
    return this.http.post(this.URI + '/v1/pr/products/' + productid, product, {headers: this.headers}).subscribe(
      val => {
        console.log('POST call successful value returned in body',
          val);
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
      }
    );
  }

  //////////////////////////////////////////////////////Get Product By ID///////////////////////////
  getProductById(productID): Observable<any> {
    return this.http.get(this.URI + '/v1/pr/products/' + productID, {headers: this.headers});
  }

  //////////////////////////////////////////////////////Get Seller Products///////////////////////////
  getSellerProducts(sellerId): Observable<any> {
    return this.http.get(this.URI + '/v1/se/users/' + sellerId + '/products', {headers: this.headers});
  }

  /*uth2test() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Basic $2a$08$fL7u5xcvsZl78su29x1ti.dxI.9rYO8t0q5wk2ROJ.1cdR53bmaVG');
    const cont= {
      'grant_type':'password',
      'username':'a257885',
      'password':'10661066'
    };
    return this.http.post(this.URI,cont, {headers:headers}).subscribe(
      val => {
        console.log('POST call successful value returned in body',
          val);
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
      }
    );
  }*/


  //////////////////////////////////////////////////////Get All Favorite///////////////////////////
  getAllFavorite(): Observable<any> {
    const url = 'http://handy-demo-handcraft.7e14.starter-us-west-2.openshiftapps.com/v1/pr/favorites';
    return this.http.get(this.URI + '/v1/pr/favorites', {headers: this.headers});
  }

  /////////////////////////////////////////////////////  Add  Favorite   ////////////////////////////////
  AddFavorite(seller) {
    return this.http.post(this.URI + '/v1/pr/favorites', seller, {headers: this.headers}).subscribe(
      val => {
        console.log('POST call successful value returned in body',
          val);
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
      }
    );
  }

  /////////////////////////////////////////////////////  Del  Favorite   ////////////////////////////////
  delFavorite(userid, productid) {
    return this.http.delete(this.URI + '/v1/pr/favorites/users/' + userid + '/products/' + productid, {headers: this.headers}).subscribe(
      val => {
        console.log('POST call successful value returned in body',
          val);
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
      }
    );
  }

  //////////////////////////////////////////////////////getIfUserFavorites ///////////////////////////
  getIfUserFavorites(userid, productid): Observable<any> {
    return this.http.get(this.URI + '/v1/pr/favorites/users/' + userid + '/products/' + productid, {headers: this.headers});
  }

  //////////////////////////////////////////////////////// list all favorited of a User   ///////////////////////////
  listAllFavoritedOfAUser(userid): Observable<any> {
    return this.http.get(this.URI + '/v1/pr/favorites/' + userid, {headers: this.headers});
  }


  //////////////////////////////////////////////////////Get User Reating ///////////////////////////
  getUserRating(sellerid): Observable<any> {
    return this.http.get(this.URI + '/v1/se/rates/sellers/' + sellerid, {headers: this.headers});
  }
  //////////////////////////////////////////////////////rate to a seller ///////////////////////////
  rateToSeller(rate,sellerid) {
    return this.http.post(this.URI + '/v1/se/rates/'+ sellerid + '/rate/'+ rate, {headers: this.headers});
  }

  ///////////////////////////get message by sender, reciever and prodcut to make the chatlist//////////////////////////
  getMessage(buyerid, sellerid, productid): Observable<any> {
    return this.http.get(this.URI + '/v1/se/messages/senders/' + buyerid + '/reciever/' + sellerid + '/products/' + productid, {headers: this.headers});
  }

  /////////////////////////////////////////////////////// send a new message  ////////////////////////////////
  sendNewMessage(newmessage) {
    return this.http.post(this.URI + '/v1/se/messages/', newmessage, {headers: this.headers}).subscribe(
      val => {
        console.log('POST call successful value returned in body',
          val);
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
      }
    );
  }

  // upload images
  uploadFile(file): Observable<any> {
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    return this.http.post(this.URI + '/api/files', formdata);
    // return this.http.post('http://localhost:8080/api/files', formdata );
  }

  getClientLocationByIp(clientIp) {
    return this.http.get(this.URI + '/v1/loc/ip/'+ clientIp , {headers: this.headers});
  }

  getClientLocationByLatLang(lat,lang) {
    let apiKey='AIzaSyB_4ikHNKSo9ZmOCsTE64Y_wKBYTTcnpQU';
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+ lat+','+lang+'&sensor=true&key='+apiKey , {headers: this.headers});
  }
}

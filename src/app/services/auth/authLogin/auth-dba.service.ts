import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {UserDbService} from '../../user-db.service';
import {stringify} from 'querystring';
import {User} from '../../../model/UserData';
import {LocalStorage} from '@ngx-pwa/local-storage';

@Injectable()
export class AuthDbaService {
  userData: any;
  isLogged = false;

  private data = new BehaviorSubject<any>(null);
  currentUser = this.data.asObservable();

  constructor(private userDatabase: UserDbService) {
  }

  setUserData(data: any) {
   if(data!=null) {
     const dataDto: any = [];

     dataDto.id = data.id;
     dataDto.sellerId = data.sellerId;
     dataDto.name = data.name;
     dataDto.image = data.image;
     dataDto.email = data.email;
     dataDto.promotionType = data.promotionType;

     this.data.next(dataDto);

     let user: User;
     user = {
       'id': data.id,
       'sellerId': data.sellerId,
       'name': data.name,
       'image': data.image,
       'email': data.email,
       'promotionType': data.promotionType
     };
     localStorage.setItem('userData', JSON.stringify(user));
   } else {
     localStorage.removeItem('userData');
     this.data.next(null);
   }
  }
  setUserData2(data: any) {//TODO why two
    const dataDto: any=[];

    dataDto.id = data.userName;
    dataDto.sellerId = data.sellerId;
    dataDto.name = data.name;
    dataDto.image = data.imageLink;
    dataDto.email = data.email;
    dataDto.promotionType = data.promotionType;
 //   if (this.userDatabase.getUser(mockedData.userName))
  //    if (this.userDatabase.getUser(mockedData.userName).promotionType == '2') {
  //      dataDto.promotionType = true;
 //     }
    this.data.next(dataDto);
  }

  getUserData(): any {
    return this.data;
  }

  isLoggedIn() {
    return this.isLogged;
  }

  logout() {
    this.setUserData(null);
  }
}

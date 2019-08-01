import {Injectable, OnInit} from '@angular/core';
import {mockedUsers} from './mockedData/users';
import {forEach} from '@angular/router/src/utils/collection';

@Injectable()
export class UserDbService implements OnInit {
  database: any;


  constructor() {
    this.database = mockedUsers;
  }

  ngOnInit() {
    this.database = mockedUsers;
  }

  save(user: any) {
    // this.database = user;
  }

  getUser(id: string) {
    for (let user of this.database) {
      if (user.id == id) {
        return user;
      }
    }
  }


}

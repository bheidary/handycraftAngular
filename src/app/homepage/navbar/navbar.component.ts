import {Component, OnInit} from '@angular/core';
import {AuthDbaService} from '../../services/auth/authLogin/auth-dba.service';
import {mockedCategories} from '../../services/mockedData/categoryList';
import {DialogLoginComponent} from '../../login/login/dialog-login.component';
import {MatDialog} from '@angular/material';
import {ProductBackendService} from '../../services/backend-data/product-backend.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logo = 'assets/images/logo/craftilogo.jpg';


  userData: any;
  promtionType: any;
  categories$;
  username;
  password;
  islogin: boolean;
  searchtext;

  constructor(private authservice: AuthDbaService,
              public dialog: MatDialog,
              private router: Router,
              private backendService: ProductBackendService
  ) {
    this.categories$ = mockedCategories;
    this.userData = JSON.parse(localStorage.getItem('userData'), (key, value) => {
      return value;
    });

    if (this.userData != null) {
      this.islogin = false;
      this.promtionType = this.userData.promotionType;
      if ((isNaN(this.userData.id)).toString() === 'false') {//TODO why?
        this.islogin = true;
      }
    }
  }

  async ngOnInit() {
    console.log('Waiting');
    this.authservice.currentUser.subscribe(data => {
      if (!this.islogin) {
        this.userData = data;
        if (data) {
          this.islogin = false;
          this.promtionType = data.promotionType;
          if ((isNaN(data.id)).toString() === 'false') {//TODO why?
            this.islogin = true;
          }
        }
      }
    });
  }

  openLoginDialog(): void {
    this.openLoginDialogBox();
  }

  openLoginDialogBox(): void {
    const dialogRef = this.dialog.open(DialogLoginComponent, {
      width: '360px',
      height: '560px',
      data: {
        name: this.username, password: this.password,
        baseCallUrl: this.router.url,
        redirectUrl: this.router.url
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.username = result;
    });
  }

/*  testauth() {
    this.backendService.auth2test();
  }*/

  sendSwishRequest() {
    // this.swishService.sendRequest(100);
  }

  searchpro(formvalue) {
    this.router.navigate(['products/search/' + formvalue.searchtext]);
  }

  logout() {
    this.authservice.logout();
    this.islogin = false;
  }
}

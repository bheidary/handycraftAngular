import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductBackendService} from '../../services/backend-data/product-backend.service';
import {DialogdelistComponent} from './dialogdelist/dialogdelist.component';
import {MatDialog} from '@angular/material';
import {AuthDbaService} from '../../services/auth/authLogin/auth-dba.service';
import {DialogLoginComponent} from '../../login/login/dialog-login.component';
import {DialogsoldComponent} from './dialogsold/dialogsold.component';
import {CustomerComponent} from '../customer.component';

@Component({
  selector: 'app-selling',
  templateUrl: './selling.component.html',
  styleUrls: ['./selling.component.css']
})
export class SellingComponent implements OnInit {
  // userData:any;
  product={};
  sellerdetails={};
  sellerverify='';
  // sellerProducts:any=[];
  username;
  password;

  @Input () sellerId;
  @Input () sellerProducts;
  // sellerId=19;
  constructor(private authservice:AuthDbaService,
              private productBackendService:ProductBackendService,
              private router:Router,
              public dialog: MatDialog,
              private activateRoute:ActivatedRoute
  ) {
  }

  async ngOnInit() {
    // this.customerPage.ngOnInit();
    // this.authservice.currentUser.subscribe(data=> {
    //   console.log('seller-data',data);
    //   this.userData=data;
      this.productBackendService.getSellerProducts(this.sellerId).subscribe(p=>this.sellerProducts=p);
      // console.log('this.userData', data);
    // });
    this.productBackendService.getSellerById(this.sellerId).subscribe(p=>{
      this.sellerdetails=p;
      this.sellerverify=p.verify;
      console.log(this.sellerverify);
    });
}

  openDialogsold(productID): void {
    console.log('productID',productID);
    const dialogRef = this.dialog.open(DialogsoldComponent, {

      width: '350px',
      height: '250px',

      data: {productID: productID}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      this.username = result;
    });
  }
  openDialogdelist(productID): void {
    const dialogRef = this.dialog.open(DialogdelistComponent, {

      width: '350px',
      height: '250px',
      data: {productID: productID}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      this.username = result;
    });
  }
}

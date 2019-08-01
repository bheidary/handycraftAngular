import { Component, OnInit } from '@angular/core';
import {mockedCategories} from '../../services/mockedData/categoryList';
import {ActivatedRoute, Router} from '@angular/router';
import {mockedProducts} from '../../services/mockedData/productLists';
import {mockedTitles} from '../../services/mockedData/titles';
import {ProductBackendService} from '../../services/backend-data/product-backend.service';
import {DialogLoginComponent} from '../../login/login/dialog-login.component';
import {MatDialog} from '@angular/material';
import {AuthDbaService} from '../../services/auth/authLogin/auth-dba.service';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {log} from 'util';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [NgbCarouselConfig]
})
export class ProductDetailsComponent implements OnInit {
  images = [0,1, 2, 3,4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);


  product:any={};
  favorite:any={};
  productId;
  userId;
  userData:any;
  sellerData:any={};
sellerProducts:any=[];
username;
password;
isadd:boolean;
islogin:boolean;
  productID;
  RateNumber:number;
  private fragment: string;
  constructor(private activateRoute:ActivatedRoute,
              private productBackendService:ProductBackendService,
              private authservice: AuthDbaService,
              private router: Router,
              public dialog: MatDialog) {
    // console.log(this.images, this.sellerProducts);
    this.isfavorit();
    const id= this.activateRoute.snapshot.paramMap.get('id');
    if(id) { this.productBackendService.getProductById(id).take(1).subscribe(item=> {
      this.product=item;
      this.productID=item.productID;
      this.productBackendService.getSellerProducts(item.sellerID).subscribe(p=>this.sellerProducts=p);
      //this.sellerinformation(item.sellerID);
      this.productBackendService.getSellerById(item.sellerID).take(1).subscribe(item2=> {
        this.sellerData=item2;
        this.getrate(item.sellerID);
      });
      console.log('mockedData inside details',id,this.product);
      // this.openDialog();
      this.islogin=false;
      this.authservice.currentUser.subscribe(data=> {
        this.userData=data;
        if(data) {
          if((isNaN(data.id)).toString()==='false') {     this.islogin=true; }
        }
      });
    });
    }
  }

  ngOnInit() {
    console.log(' activatedRoute', this.router.url);
    this.activateRoute.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }

public  chat():void {
    if(this.userData) {
      this.router.navigate(['/products/detailschat/'+this.productID]);
      console.log('ok');
    } else {
      this.openDialog('products/detailschat/'+this.productID);
      // this.router.navigate(['/products/detailschat/'+this.productID]);
    }
}
  public openDialog(url): void {
    const dialogRef = this.dialog.open(DialogLoginComponent, {
      width: '360px',
      height: '560px',
      data: {name: this.username, password: this.password,
        baseCallUrl:this.router.url,
        redirectUrl:url}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      this.username = result;
      // this.router.navigate([url]);
    });
  }

  public dofavorit():void {
    this.isadd=!this.isadd;
    if(this.isadd==true) {
      this.addtofavorit();
    } else {
      this.dellfavorit();
    }
  }




  public isfavorit():void {
    this.productId=this.activateRoute.snapshot.paramMap.get('id');
    this.authservice.currentUser.subscribe(data=> {
      this.userData=data;
      if(data) {
        this.userId=data.sellerId;
        this.favorite= {'productId':this.productId,'userId':this.userId};
        this.productBackendService.getIfUserFavorites(this.userId,this.productId).take(1).subscribe(item2=> {
          console.log('isfavorite???:',item2);
          this.isadd=item2;
        });
      }
    });
  }
  public addtofavorit():void {
    this.productId=this.activateRoute.snapshot.paramMap.get('id');
    this.authservice.currentUser.subscribe(data=> {
      this.userData=data;
      if(data) {
        this.userId=data.sellerId;
        this.favorite= {'productId':this.productId,'userId':this.userId};
        this.productBackendService.AddFavorite(this.favorite);
        console.log('add this.favorite',this.favorite);
      }
    });
  }
  public dellfavorit():void {
    this.productId=this.activateRoute.snapshot.paramMap.get('id');
    this.authservice.currentUser.subscribe(data=> {
      this.userData=data;
      if(data) {
        this.userId=data.sellerId;
        this.productBackendService.delFavorite(this.userId,this.productId);
        console.log('dell this.productId',this.productId);
        console.log('dell this.userId',this.userId);
      }
    });
  }

  public sellerinformation(sellerid):void {
    this.productBackendService.getSellerById(sellerid).take(1).subscribe(item=> {
    this.sellerData=item;
    });
  }


  getrate(sellerid) {
    this.RateNumber=3.5;
    console.log('this.sellerRate',this.RateNumber);

    this.productBackendService.getUserRating(sellerid).take(1).subscribe(item2=> {
      // this.RateNumber=item2;
      console.log('this.sellerRate',this.RateNumber);
    });
  }
  save(x) {

  }
  setRate(rate){
    console.log('rate.....:',rate);
    console.log('this.sellerData.sellerId.....:',this.sellerData.sellerId);
    this.productBackendService.rateToSeller(rate,this.sellerData.sellerId).subscribe(item => {
    });
  }
}

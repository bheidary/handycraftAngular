import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductBackendService} from '../../services/backend-data/product-backend.service';
import {MatDialog} from '@angular/material';
import {AuthDbaService} from '../../services/auth/authLogin/auth-dba.service';

@Component({
  selector: 'app-product-chat',
  templateUrl: './product-chat.component.html',
  styleUrls: ['./product-chat.component.css']
})
export class ProductChatComponent implements OnInit {
  product={};
  favorite={};
  productId;
  userId;
  userData:any;
  sellerData2:any={};
  sellerProducts:any=[];
  username;
  password;
  isadd:boolean;
  islogin:boolean;
  newmessage;
  newmessages={};
  seller;
  buyer;
  messages= [];
  messageList:any[]=[];
  RateNumber:number;


  constructor(private activateRoute:ActivatedRoute,
              private productBackendService:ProductBackendService,
              private authservice: AuthDbaService,
              public dialog: MatDialog) {
    this.isadd=true;
    let id= this.activateRoute.snapshot.paramMap.get('id');
    if(id) this.productBackendService.getProductById(id).take(1).subscribe(item=>{
      this.product=item;
      this.seller=item.sellerID;
      this.getrate(item.sellerID);
      //this.getmessages(this.buyer,this.seller,id);
      this.productBackendService.getSellerProducts(item.sellerID).subscribe(p=>this.sellerProducts=p);
      this.productBackendService.getSellerById(item.sellerID).take(1).subscribe(item2=>{
        this.sellerData2=item2;
      });
      console.log("mockedData inside details",id,this.product);
      // this.openDialog();
      this.islogin=false;
      this.authservice.currentUser.subscribe(data=>{
        this.userData=data;
        if(data) {
          this.islogin=true;
          this.buyer=this.userData.sellerId;
          console.log("mockedData massages",data);
          console.log("kharidar:",this.buyer);
          console.log("foroshande:",this.seller);
          console.log("product:",id);
          this.getmessages(this.buyer,this.seller,id);
        }
      });
    });
   // this.getmessages(this.buyer,this.seller,id);
  }

  ngOnInit() {
  }
  sendmessage(msg){
    this.newmessages={"senderId":1,"reciverId":8,"productId":12,"message":msg};
    this.messageList.push(this.newmessages);
    console.log(this.newmessages);
    this.productBackendService.sendNewMessage(this.newmessages);
    this.newmessage="";
  }

  getrate(sellerid){
    this.productBackendService.getUserRating(sellerid).take(1).subscribe(item2=>{
      this.RateNumber=item2;
      console.log("this.sellerRate",this.RateNumber);
    });
  }

  getmessages(buyerid,sellerid,productid){
    this.productBackendService.getMessage(buyerid,sellerid,productid).take(1).subscribe(item2=>{
      this.RateNumber=item2;
      this.messages=item2;
      this.messageList=item2;
      console.log("all message",item2);
    });
  }

  save(value: any) {

  }
}

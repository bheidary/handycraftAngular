import { Component, OnInit } from '@angular/core';
import {ProductBackendService} from "../services/backend-data/product-backend.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthDbaService} from "../services/auth/authLogin/auth-dba.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  userData:any;
  id;
  RateNumber:number;
  sellerProducts: any;
  constructor(private authservice:AuthDbaService,private productBackendService:ProductBackendService, private router:Router, private activateRoute:ActivatedRoute) {
    this.activateRoute.params.subscribe(params => {
      this.id = params['id'];
      console.log('id=',this.id);
    });
  }
  async ngOnInit() {

    this.authservice.currentUser.subscribe(data=>{
      this.userData=data;
      // this.getrate();
      this.productBackendService.getSellerProducts(data.sellerId).subscribe(p=>{
        this.sellerProducts=p;
        console.log("this.sellerproducts", this.sellerProducts);
      });
      console.log("this.userData12345", data);

    });
  }
  getrate() {
    this.productBackendService.getUserRating(this.userData.sellerId).take(1).subscribe(item2=>{
      this.RateNumber=item2;
      console.log("this.sellerRate",this.RateNumber);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import {mockedCategories} from '../../services/mockedData/categoryList';
import {ActivatedRoute, Router} from '@angular/router';
import {mockedProducts} from '../../services/mockedData/productLists';
import {mockedTitles} from '../../services/mockedData/titles';
import {ProductBackendService} from '../../services/backend-data/product-backend.service';
import {MatDialog} from '@angular/material';
import {AuthDbaService} from '../../services/auth/authLogin/auth-dba.service';

@Component({
  selector: 'app-buying',
  templateUrl: './buying.component.html',
  styleUrls: ['./buying.component.css']
})
export class BuyingComponent implements OnInit {
  userData:any;
  product={};
  sellerProducts:any=[];
  username;
  password;
  constructor(private authservice:AuthDbaService,private productBackendService:ProductBackendService, private router:Router, private activateRoute:ActivatedRoute) {
    //  this.productBackendService.getSellerProducts(this.userData.id).subscribe(p=>this.sellerProducts=p);
  //  this.productBackendService.getAllData().subscribe(p=>this.sellerProducts=p);
  }

  async ngOnInit() {
    this.authservice.currentUser.subscribe(data=>{
      this.userData=data;
      console.log("this.userData", data);
    });

  }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductBackendService} from '../../services/backend-data/product-backend.service';
import {MatDialog} from '@angular/material';
import {AuthDbaService} from '../../services/auth/authLogin/auth-dba.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  userData:any;
  product={};
  favorites=[];
  sellerProducts:any=[];
  username;
  password;
  constructor(private authservice:AuthDbaService,
              private productBackendService:ProductBackendService,
              private router:Router,
              public dialog: MatDialog,
              private activateRoute:ActivatedRoute) {
  }

  async ngOnInit() {
    this.authservice.currentUser.subscribe(data=>{
      this.userData=data;
      this.productBackendService.listAllFavoritedOfAUser(this.userData.sellerId).subscribe(item=>{
        console.log("favorites = ", item);
        this.favorites = item;
        this.favorites.forEach(favorite => {
          console.log(favorite);
          this.productBackendService.getProductById(favorite.productId).subscribe(p=>this.sellerProducts = this.sellerProducts.concat(p));
        });
      })
      console.log("this.userData", data);
    });
  }
}

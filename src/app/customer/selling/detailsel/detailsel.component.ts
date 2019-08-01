import { Component, OnInit } from '@angular/core';
import {mockedCategories} from '../../../services/mockedData/categoryList';
import {ActivatedRoute, Router} from '@angular/router';
import {mockedProducts} from '../../../services/mockedData/productLists';
import {mockedTitles} from '../../../services/mockedData/titles';
import {ProductBackendService} from '../../../services/backend-data/product-backend.service';
import {DialogLoginComponent} from '../../../login/login/dialog-login.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-detailsel',
  templateUrl: './detailsel.component.html',
  styleUrls: ['./detailsel.component.css']
})
export class DetailselComponent implements OnInit {
  product:any={};
  username;
  password;
  userData;
  constructor(private activateRoute:ActivatedRoute, private productBackendService:ProductBackendService, public dialog: MatDialog) {
    let id= this.activateRoute.snapshot.paramMap.get('id');
    if(id) this.productBackendService.getProductById(id).take(1).subscribe(item=>{
      this.product=item;
      console.log("this.product",this.product);
    });
  }

  ngOnInit() {
  }

}

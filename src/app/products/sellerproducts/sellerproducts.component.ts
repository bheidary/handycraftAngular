import {Component, OnInit} from '@angular/core';
import {ProductBackendService} from '../../services/backend-data/product-backend.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sellerproducts',
  templateUrl: './sellerproducts.component.html',
  styleUrls: ['./sellerproducts.component.css']
})
export class SellerproductsComponent implements OnInit {
  sellerProducts:any=[];
  sellerData:any;
  RateNumber:number;
  category$={};
  constructor(private activateRoute:ActivatedRoute,private productBackendService: ProductBackendService) {
    let id= this.activateRoute.snapshot.paramMap.get('id');
    this.getrate(id);
    this.productBackendService.getSellerProducts(id).subscribe(p=>this.sellerProducts=p);
    this.productBackendService.getSellerById(id).take(1).subscribe(item2=>{
      this.sellerData=item2;
    });
  }
  ngOnInit() {
  }
  getrate(sellerid){
    this.RateNumber=3.4;
    this.productBackendService.getUserRating(sellerid).take(1).subscribe(item2=>{
      this.RateNumber=item2;
      console.log("this.sellerRate",this.RateNumber);
    });
  }
}

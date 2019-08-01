import {Component, OnInit} from '@angular/core';
import {ProductBackendService} from '../../services/backend-data/product-backend.service';
import {mockedProducts} from '../../services/mockedData/productLists';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-searchproduct',
  templateUrl: './searchproduct.component.html',
  styleUrls: ['./searchproduct.component.css']
})
export class SearchproductComponent implements OnInit {
  products: any[] = [];
  constructor(private activateRoute:ActivatedRoute,private productBackendService: ProductBackendService, private  route: ActivatedRoute) {
    let searchtext= this.activateRoute.snapshot.paramMap.get('id');
    console.log(searchtext);
    if(searchtext==='undefined')
    {
      this.productBackendService.getAllData().subscribe(product=>{
        this.products=product;
      });
    }
    else {
      this.productBackendService.searchproduct(searchtext).subscribe(p => {
        this.products = p;
        console.log(this.products);
      });
    }
  }

  ngOnInit() {
  }
}

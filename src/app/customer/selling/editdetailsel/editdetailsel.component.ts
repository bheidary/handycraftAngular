import { Component, OnInit } from '@angular/core';
import {mockedCategories} from '../../../services/mockedData/categoryList';
import {ProductBackendService} from '../../../services/backend-data/product-backend.service';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-editdetailsel',
  templateUrl: './editdetailsel.component.html',
  styleUrls: ['./editdetailsel.component.css']
})
export class EditdetailselComponent implements OnInit {
  product:any={};
  categories;
  selected ;
  url: string;
  file;
  selectFieSize =0;
  constructor(private productBackendService:ProductBackendService, private router:Router, private activateRoute:ActivatedRoute) {
    this.categories= mockedCategories;
    let id= this.activateRoute.snapshot.paramMap.get('id');
    if(id) this.productBackendService.getProductById(id).take(1).subscribe(item=>{
      this.product=item;
      console.log("product:",this.product);
    });

  }

  ngOnInit() {
  }
  onSelectFile(event){
    this.file = event.target.files[0];
    console.log(this.file.size);
    this.selectFieSize = this.file.size;
  }
  save(editproduct){
    console.log(editproduct);
  }
}

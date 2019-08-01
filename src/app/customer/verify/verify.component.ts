import { Component, OnInit } from '@angular/core';
import {ProductBackendService} from '../../services/backend-data/product-backend.service';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/take';
import {AuthDbaService} from '../../services/auth/authLogin/auth-dba.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
  seller:any={};
  file;
  selectFieSize =0;
  userData:any;
  newemail:any;
  constructor(
    private productBackendService:ProductBackendService,
    private router:Router,
    private authservice:AuthDbaService,
    private activateRoute:ActivatedRoute) {  }
   ngOnInit() {
    this.authservice.currentUser.subscribe(data=>{
      this.userData=data;
      console.log('data inside verify',data);
      this.newemail=data.email;
    });
    this.productBackendService.getSellerByEmail(this.newemail).take(1).subscribe(item=>{
      this.seller=item;
    });
  }
  updateseller(seller){
    console.log("seller:",seller);
    this.productBackendService.saveSeller(seller);
 //  this.router.navigate(['customer/1']);
  }
  onSelectFile(event){
    this.file = event.target.files[0];
    //  console.log(this.file.size);
    this.selectFieSize = this.file.size;
  }
}

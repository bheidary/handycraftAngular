import {Component, OnInit} from '@angular/core';
import {mockedCategories} from '../../../services/mockedData/categoryList';
import {ProductBackendService} from '../../../services/backend-data/product-backend.service';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/take';
import {CustomerComponent} from '../../customer.component';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-newsel',
  templateUrl: './newsel.component.html',
  styleUrls: ['./newsel.component.css']
})
export class NewselComponent implements OnInit {
  product: any = {};
  categories;
  selected;
  url: string;
  file: File;
  selectFieSize = 0;
  sellerID;
  productDateIn;
  productExpireDate;
  constructor(private productBackendService: ProductBackendService,
              private router: Router,
              private activateRoute: ActivatedRoute
              ) {
    this.categories = mockedCategories;
    this.sellerID = this.activateRoute.snapshot.paramMap.get('id');
    console.log(this.sellerID);
    //let id= this.activateRoute.snapshot.paramMap.get('id');
    //  if(id) this.productBackendService.getProductById(id).take(1).subscribe(item=>this.product=item);
  }

  ngOnInit() {

  }

  onSelectFile(event) {
    this.file = event.target.files[0];
    console.log(this.file.size);
    this.selectFieSize = this.file.size;
  }


  save(formvalue) {
    this.productDateIn = new Date();
    this.productExpireDate = new Date();
    this.productExpireDate.setDate( this.productExpireDate.getDate() +30 );
    console.log(formvalue);
    //this.product={"sellerID":formvalue.sellerID,"name":formvalue.name};
    console.log(this.product);
    let imageUrl = '';
    if (this.file != null) {
      this.productBackendService.uploadFile(this.file).subscribe(item => {
        imageUrl = item.imageUrl;
        console.log('imageUrl= ', imageUrl);
        this.product = {
          'sellerID': this.sellerID,
          'name': formvalue.name,
          'numbers': formvalue.Numbers,
          'price': formvalue.price,
          'lng': '',
          'lat': '',
          // 'image': imageUrl,
          'image': 'https://picsum.photos/202',
          'category': formvalue.category,
          'productDateIn': this.productDateIn,
          'productExpireDate': this.productExpireDate,
          'description': formvalue.description,
          'keywoards': formvalue.keywoards,
          'status': 'ACTIVE'
        };
        this.productBackendService.saveProduct(this.product).subscribe(item => {
          this.router.navigate(['customer/1']);
        });
      });
    }

  }

}

import { Options } from 'ng5-slider';
import {Component, OnInit} from '@angular/core';
import {ProductBackendService} from '../services/backend-data/product-backend.service';
import {mockedProducts} from '../services/mockedData/productLists';
import {mockedCategories} from '../services/mockedData/categoryList';
import {mockedLats} from '../services/mockedData/lat';
import {HttpClient} from '@angular/common/http';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {getLocaleDateTimeFormat} from '@angular/common';
import {formatDate,DatePipe } from '@angular/common';
export interface IUser {
  lat: string;
  priceSearchMin: number;
  priceSearchMax: number;
  productDateInSearch:string;
  productDateInSearch2:string;
  category: string;
}
interface RangeSliderModel {
  minValue: number;
  maxValue: number;
  options: Options;
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  latSearch = '';
  productDateInSearch='';
  //productDateInSearch2 : any;
  categorySearch = '';
  productDateInSearch2='';
//slyder
  priceSearchMin: number = 0;
  priceSearchMax: number = 100000;
  options: Options = {
    floor: 0,
    ceil: 100000,
    translate: (value: number): string => {
      return 'kr' + value;
    }
  };
  //slyder
//datepicker
  events: string[] = [];
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    //this.productDateInSearch= event.value;
    this.productDateInSearch=this.datePipe.transform(event.value,"yyyy-MM-dd");
    console.log('sdsdsdsds-----',this.productDateInSearch);
  }
  //datepicker



  products: any[] = [];
  category$: string;
  lats$;
  categories$;
   clientIp='0.0.0.0';
   locationDat: Object;
  newdate;
  newdate2;
  result : boolean = false;
  constructor(private productBackendService: ProductBackendService , private http: HttpClient,private datePipe: DatePipe) {
    //this.products = mockedProducts;

    this.productDateInSearch2=this.datePipe.transform(new Date(),"yyyy-MM-dd");

    this.newdate = formatDate(Date.now(), 'dd/MM/yyyy', 'en-US');
    console.log(this.newdate);

    this.newdate2 = new Date();
    console.log(this.datePipe.transform(this.newdate2,"yyyy-MM-dd")); //output : 2018-02-13
    console.log('this.productDateInSearch2',this.productDateInSearch2);

    this.productBackendService.getAllData().subscribe(product=>{
      this.products=product;
    });

    this.categories$=mockedCategories;
    this.lats$=mockedLats;
  }

  ngOnInit() {
    this.getIpCliente();
    // this.productBackendService.get
  }

  getIpCliente() {
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(pos=> {
    //     this.productBackendService.getClientLocationByLatLang(pos.coords.latitude,pos.coords.longitude).subscribe(item=>{
    //       this.locationDat =item;
    //       console.log('this.locationDat',this.locationDat);
    //       // this.locationDat =pos;
    //     });
    //
    //     // this.locationDat =pos;
    //   });
    // } else
      {

      this.http.get('https://api.ipify.org/?format=json&callback=JSONP_CALLBACK').subscribe(data => {
        this.clientIp = data['ip'];
        this.productBackendService.getClientLocationByIp(this.clientIp).subscribe(item => {
          this.locationDat = item;
          console.log('this.clientIp', this.clientIp);
          console.log('this.locationDat', this.locationDat);
          // console.log('this.locationDat', this.locationDat['city'].names['en']);
          // console.log('this.locationDat', this.locationDat['subdivisions'][0].names['en']);
        });
      });
    }
  }




  compareDates(dateproduct){
    this.newdate2 = new Date();
    this.newdate2.setDate( this.newdate2.getDate() -7 );
    this.newdate2=this.datePipe.transform(this.newdate2,"yyyy-MM-dd");
    dateproduct=this.datePipe.transform(dateproduct,"yyyy-MM-dd");
   // console.log("ssdfsdfsdfsdf",dateproduct);
 //   console.log("...........",this.newdate2);
    if(dateproduct>=this.newdate2)
      this.result=true;
    else
      this.result=false;
    return this.result;
  }
}

import { Ng5SliderModule } from 'ng5-slider';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatChipsModule, MatInputModule,MatDialogModule, MatTableModule, MatTabsModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatCheckboxModule, MatDatepickerModule, MatRadioModule, MatSelectModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {CustomMaterialModule} from './homepage/material.module';
import {GrdFilterPipe} from './products/filter/grd-filter.pipe';
import {FilterPipe} from './products/filter/filter.pipe';
import {SearchUserPipe} from './products/filterand/search-user.pipe';

import {SellerproductsComponent} from './products/sellerproducts/sellerproducts.component';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './homepage/navbar/navbar.component';
import { HomeComponent } from './homepage/home/home.component';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider, LinkedinLoginProvider,
} from 'angular-6-social-login';

import {AuthDbaService} from './services/auth/authLogin/auth-dba.service';
import {AuthGuardService} from './services/auth/authguard/auth-guard.service';
import {UserDbService} from './services/user-db.service';
import {ProductBackendService} from './services/backend-data/product-backend.service';
import {HttpClientModule} from '@angular/common/http';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {DatePipe} from '@angular/common';
/*import {
  MdButtonModule,
  MdCheckboxModule,
  MdChipsModule,
  MdDatepickerModule,
  MdExpansionModule,
  MdIconModule,
  MdInputModule,
  MdMenuModule,
  MdNativeDateModule,
  MdSelectModule,
  MdSidenavModule
} from '@angular/material';*/

import 'hammerjs';
import {FileSizeModule} from 'ngx-filesize';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { DialogLoginComponent } from './login/login/dialog-login.component';
import {CustomerComponent} from './customer/customer.component';
import { SellingComponent } from './customer/selling/selling.component';
import { BuyingComponent } from './customer/buying/buying.component';
import { WatchlistComponent } from './customer/watchlist/watchlist.component';
import { ReviewsComponent } from './customer/reviews/reviews.component';
import { MessagesComponent } from './customer/messages/messages.component';
import { DetailselComponent } from './customer/selling/detailsel/detailsel.component';
import { EditdetailselComponent } from './customer/selling/editdetailsel/editdetailsel.component';
import { NewselComponent } from './customer/selling/newsel/newsel.component';
import { SellerslistComponent } from './admin/sellerslist/sellerslist.component';
import { ProductslistComponent } from './admin/productslist/productslist.component';
import { VerifyComponent } from './customer/verify/verify.component';

import { DialogsoldComponent } from './customer/selling/dialogsold/dialogsold.component';
import {DialogdelistComponent} from './customer/selling/dialogdelist/dialogdelist.component';
import { DialogsignupComponent } from './login/signup/dialogsignup.component';
import { ProductChatComponent } from './products/product-chat/product-chat.component';
import { SearchproductComponent } from './products/searchproduct/searchproduct.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { FilterandComponent } from './products/filterand/filterand.component';
import { FooterComponent } from './homepage/footer/footer.component';




// Configs
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider('876291656058810')
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('507412302339-pjv2a3knpctrp7ch92tv10n02idecmm1.apps.googleusercontent.com')
      },
      {
        id: LinkedinLoginProvider.PROVIDER_ID,
        provider: new LinkedinLoginProvider('1098828800522-m2ig6bieilc3tpqvmlcpdvrpvn86q4ks.apps.googleusercontent.com')
      },
    ]
);
  return config;
}


// @ts-ignore
@NgModule({
  imports: [
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule,
    MatDatepickerModule,
    MatRadioModule,
    Ng5SliderModule,
    CustomMaterialModule,
    MatTableModule,
    BrowserModule,
    FormsModule,
    //for file size
    FileSizeModule,
    ReactiveFormsModule,
//for material
    MatTabsModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatFormFieldModule, MatInputModule,MatSelectModule, MatChipsModule,
    MatDialogModule,MatIconModule,

    MatCardModule,
    SocialLoginModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'products/details/:id', component: ProductDetailsComponent },
      { path: 'products/detailschat/:id', component: ProductChatComponent },
      { path: 'products/detailschat', component: ProductChatComponent },
      {path : 'products/sellerproducts/:id',component:SellerproductsComponent},
      {path:'products/search/:id',component:SearchproductComponent},
      { path: 'login', component: DialogLoginComponent },
      {path:'Promotion',component:VerifyComponent},
      {path:'customer',component:CustomerComponent},
      { path: 'customer/:id', component: CustomerComponent },
      { path: 'detailsel', component: DetailselComponent },
      { path: 'detailsel/:id', component: DetailselComponent },
      {path: 'editdetailsel',component:EditdetailselComponent},
      {path: 'editdetailsel/:id',component:EditdetailselComponent},
      {path: 'newsel/:id',component:NewselComponent},
      {path: 'sellerslist',component:SellerslistComponent},
      {path: 'sellerslist/:id',component:SellerslistComponent},
      {path: 'productslist',component:ProductslistComponent},//,canActivate:[AuthGuardService]
      {path: 'productslist/:id',component:ProductslistComponent},
      {path: 'products/filterand',component:FilterandComponent},
    ]),
    GridModule
  ],
  declarations: [
    AppComponent,
    ProductsComponent,
    SellerproductsComponent,
    NavbarComponent,
    HomeComponent,
    ProductDetailsComponent,
    DialogLoginComponent,
    CustomerComponent,
    SellingComponent,
    BuyingComponent,
    WatchlistComponent,
    ReviewsComponent,
    MessagesComponent,
    DetailselComponent,
    EditdetailselComponent,
    NewselComponent,
    SellerslistComponent,
    ProductslistComponent,
    VerifyComponent,
    DialogsoldComponent,
    DialogdelistComponent,
    DialogsignupComponent,
    ProductChatComponent,
    SearchproductComponent,
    GrdFilterPipe,
    FilterPipe,
    SearchUserPipe,
    FilterandComponent,
    FooterComponent,
  ],
  providers: [
    DatePipe,
    AuthDbaService,
    AuthGuardService,
    UserDbService,
    ProductBackendService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent],
  entryComponents:[
    DialogsoldComponent,
    DialogLoginComponent,
    DialogdelistComponent,
    DialogsignupComponent
  ]
})
export class AppModule { }

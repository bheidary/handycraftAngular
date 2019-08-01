import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

import {ProductBackendService} from '../../services/backend-data/product-backend.service';
import {AuthDbaService} from '../../services/auth/authLogin/auth-dba.service';
import {UserDbService} from '../../services/user-db.service';
import {Router} from '@angular/router';
import {AuthService, FacebookLoginProvider, GoogleLoginProvider, LinkedinLoginProvider} from 'angular-6-social-login';
import {DialogLoginComponent} from '../login/dialog-login.component';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-dialogsignup',
  templateUrl: './dialogsignup.component.html',
  styleUrls: ['./dialogsignup.component.css']
})
export class DialogsignupComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passFormControl = new FormControl('', [
    Validators.required,
  ]);
  FullnameFormControl = new FormControl('', [
    Validators.required,
  ]);
  matcher = new MyErrorStateMatcher();



  Fullname;
  email;
  username;
  password;
///////////////////////////////////
  userin:boolean;
  newseller={};
  userData:any;
  emailrepeat:boolean;
  //////////////////////////////
  constructor(
    private socialAuthService: AuthService,
    private productBackendService:ProductBackendService,
    private authservice: AuthDbaService,
    private router: Router,
    public dialog: MatDialog,
    private userDatabase: UserDbService,
    public dialogRef: MatDialogRef<DialogsignupComponent>,
    // @Inject(MAT_DIALOG_DATA) public mockedData: DialogData
  ) {  }
  onsignup(): void {
    this.userin=true;
    console.log('aval');
    console.log(this.getRandom(21));
    this.productBackendService.getSellerByEmail(this.email).take(1).subscribe(item=>{
      this.userin=false;
     // this.newseller=item;
     // this.productBackendService.saveSeller(this.newseller);
    //  this.authservice.setUserData(item);
     // this.authservice.setUserData2(item);
    //  this.userDatabase.save(this.newseller);
      console.log(this.userin);
      console.log('dowom');
    },error1 => {
      console.log('sewom');
      this.newseller={"userName":this.getRandom(21),"name":this.Fullname,"description":"","imageLink":"","products":"","promotionType":"1","email":this.email,"password":this.password};
      console.log("new seller",this.newseller);
      this.productBackendService.saveSeller(this.newseller);

      this.productBackendService.getSellerByEmail(this.email).take(1).subscribe(item=>{
      this.authservice.setUserData(item);
      // this.authservice.setUserData2(item);
      this.emailrepeat=true;
      this.userDatabase.save(this.newseller);

      console.log(this.userin);
      console.log('dowom');
    });
    this.dialogRef.close();
  });


    console.log('this.newseller',this.newseller);



      console.log("panj");

  }

  ngOnInit() {
    this.emailrepeat=false;
  }
  openDialoglogin(): void {
    this.dialogRef.close();
    const dialogRef = this.dialog.open(DialogLoginComponent, {
      width: '360px',
      height: '560px',
      data: {name: this.username, password: this.password}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      this.username = result;
    });
  }
  getRandom(length) {
    return Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1));
  }
}

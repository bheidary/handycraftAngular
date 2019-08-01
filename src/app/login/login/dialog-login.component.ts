import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

import {ProductBackendService} from '../../services/backend-data/product-backend.service';
import {AuthDbaService} from '../../services/auth/authLogin/auth-dba.service';
import {UserDbService} from '../../services/user-db.service';
import {Router} from '@angular/router';
import {AuthService, FacebookLoginProvider, GoogleLoginProvider, LinkedinLoginProvider} from 'angular-6-social-login';
import {DialogsignupComponent} from '../signup/dialogsignup.component';



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
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.css']
})
export class DialogLoginComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passFormControl = new FormControl('', [
    Validators.required,
  ]);
  matcher = new MyErrorStateMatcher();



  email;
  emailfound:boolean;
  passworderror:boolean;
  username;
  password;
///////////////////////////////////
  userin:boolean;
  newpromtionType:any;
  newuserid:any;
  newname:any;
  newimage:any;
  newemail:any;
  newseller={};
  userData:any;
  //////////////////////////////
  constructor(
    private socialAuthService: AuthService,
    private productBackendService:ProductBackendService,
    private authservice: AuthDbaService,
    private router: Router,
    public dialog: MatDialog,
    private userDatabase: UserDbService,
    public dialogRef: MatDialogRef<DialogsignupComponent>,
    @Inject(MAT_DIALOG_DATA) public data
    ) {  }
  ngOnInit() {  }

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if(socialPlatform == 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == 'linkedin') {
      socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
    }
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        this.authservice.setUserData(userData);
        this.userDatabase.save(userData);
        //TODO if Notlogged in what will happen
        /////////////////////////////////////
        this.userin=true;
        this.authservice.currentUser.subscribe(data=> {
          this.userData=data;
          if(data) {
            this.newuserid=data.id;
            this.newpromtionType=data.promotionType;
            this.newname=data.name;
            this.newimage=data.image;
            this.newemail=data.email;
          }
        });
        this.productBackendService.getSellerByEmail(this.newemail).take(1).subscribe(item=> {
          this.userin=false;
          this.authservice.setUserData2(item);
        },error1 => {
          this.newseller= {'userName':this.newuserid,'name':this.newname,'description':'','imageLink':this.newimage,'products':'','promotionType':'1','email':this.newemail};
          this.productBackendService.saveSeller(this.newseller);
        });

        ////////////////////////////////////
        if (this.router.url !== this.data.redirectUrl) {
        this.router.navigate([this.data.redirectUrl]);
        }

      }
    );
    if (this.router.url !== this.data.redirectUrl) {
      this.router.navigate([this.data.baseCallUrl]);
    }
    this.dialogRef.close();
  }
  openDialogsignup(): void {
    this.dialogRef.close();
      const dialogRef = this.dialog.open(DialogsignupComponent, {
        width: '360px',
        height: '560px',
        data: {name: this.username, password: this.password}
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed',result);
        this.username = result;
      });
    }

  onNoClick(): void {
    this.passworderror=false;
    this.emailfound=false;
    this.productBackendService.getSellerByEmail(this.username).take(1).subscribe(item=> {
      this.newseller=item;
      if(item.password===this.password) {
        this.emailfound = false;
        this.authservice.setUserData2(this.newseller);
        this.userDatabase.save(this.newseller);
        this.dialogRef.close();
      } else {
        this.passworderror=true;
      }
    },error1 => {
      this.emailfound=true;
    });
  }
}

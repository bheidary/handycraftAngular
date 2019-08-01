import {Component, OnInit,Inject} from '@angular/core';
import {MatDialogRef,MatDialog,MAT_DIALOG_DATA} from '@angular/material';
import {Router} from '@angular/router';
import {ProductBackendService} from '../../../services/backend-data/product-backend.service';

@Component({
  selector: 'app-dialogdelist',
  templateUrl: './dialogdelist.component.html',
  styleUrls: ['./dialogdelist.component.css']
})
export class DialogdelistComponent implements OnInit {
  newdata:any;
  newdata2:any;
  constructor(private router: Router,
              private productBackendService:ProductBackendService,
              public dialogRef: MatDialogRef<DialogdelistComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onYesClick(): void {
    //this.productBackendService.getProductById(this.mockedData.productID).subscribe(p=>this.mockedData=p);
    this.productBackendService.getProductById(this.data.productID).take(1).subscribe(p=>{
      this.newdata2=p;
      console.log(this.newdata2);
      this.dialogRef.close();
    });
    this.newdata={"status":"DELIST"}
    this.productBackendService.updateProduct(this.data.productID,this.newdata);
  }
  ngOnInit() {
    console.log(this.data);
  }
}

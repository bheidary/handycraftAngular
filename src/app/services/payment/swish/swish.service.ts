
'use strict';
import { Injectable } from '@angular/core';
// import payment = require('payment-payment');

@Injectable()
export class SwishService {

  constructor() {

    /*payment.init({
      cert: {
        key: 'res/certs/payment.key',
        cert: 'res/certs/payment.crt',
        ca: 'res/certs/payment.ca',
        passphrase: 'payment'
      },
      mockedData: {
        payeeAlias: '1231181189',
        currency: 'SEK',
        callbackUrl: 'https://www.localhost:4200'
      }
    });*/
  }


  sendRequest(amount){
    // /*payment.add({
    //   payeePaymentReference: "snus123",
    //   payerAlias: '0762592501',
    //   amount: "100",
    //   message: "Handy craft Test"
    // })
    //   .then(function(id) {
    //     console.log(id);
    //   });*/
  }

  getRequestById(id){
    // payment.get(id)
    //   .then(function(mockedData) {
    //     console.log(mockedData);
    //   });
  }


}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import axios, { Axios } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http: HttpClient) { }

  async getRate(coins :number): Promise<any> {
    let rate :number  = await axios.get('https://blockchain.info/tobtc?currency=USD&value=1')
    console.log('rate' , rate);
    
    return Promise.resolve(rate)
  }


  // getMarketPrice()
  // getConfirmedTransactions()

}



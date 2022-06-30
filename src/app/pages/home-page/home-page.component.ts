import { Component, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user-model';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  @Output() maxToDisplay: number

  rate: number
  user: User
  constructor(private bitcoinService: BitcoinService, private userService: UserService) { }

  ngOnInit(): void {
    // this.bitcoinService.getRate(1) //disabled not to be blocked
    //   .then(res =>
    //     this.rate = res.data 
    //   )

    this.user = this.userService.getLoggedInUser()
  }

}

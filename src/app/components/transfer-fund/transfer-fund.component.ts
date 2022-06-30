import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { MoveService } from 'src/app/services/move.service';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {

  @Input() contactToTransform: Contact

  amount: number
  maxAmount: number
  errorMsg: string

  constructor(private moveService: MoveService, private userService: UserService) { }

  ngOnInit(): void {
    this.maxAmount = this.userService.getLoggedInUser().coins
  }

  onTransformCoins() {
    if (this.amount < this.maxAmount) {
      this.moveService.onMove(this.contactToTransform, this.amount)
      this.amount = 0
      this.maxAmount -= this.amount
    } else {
      this.errorMsg = 'Error: you don\'t have enough coins!'
      setTimeout(() => {
        this.errorMsg = ''
      }, 3500)
    }
  }

}

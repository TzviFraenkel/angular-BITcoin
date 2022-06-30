import { Component, Input, OnInit } from '@angular/core';
import { Move } from 'src/app/models/move';
import { User } from 'src/app/models/user-model';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnInit {

  @Input() contactMoveId: string = ''
  @Input() maxToDisplay: number = 0

  user: User
  movesToDisplay: Move[]

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.getLoggedInUser()
    this.maxToDisplay = !this.maxToDisplay ? this.user.moves.length : this.maxToDisplay
    
    this.movesToDisplay = this.user.moves.filter(move => move.toId === this.contactMoveId || this.contactMoveId === '')
    
    this.movesToDisplay = this.movesToDisplay.slice(0,this.maxToDisplay)
  }

}

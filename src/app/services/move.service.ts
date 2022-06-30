import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { Move } from '../models/move';
import { User } from '../models/user-model';
import { UserService } from './user-service.service';
//a bit needless, could have bean done from UserService

@Injectable({
  providedIn: 'root'
})
export class MoveService {

  constructor(private userServise: UserService) { }

  onMove(contact: Contact, amount: number): void {
    let move: Move = { toId: contact._id, to: contact.name, at: Date.now(), amount }
    let user: User = this.userServise.getLoggedInUser()
    user.moves.push(move)
    user.coins -= amount
    this.userServise.updateUser(user)
  }
}

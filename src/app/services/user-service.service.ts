import { Injectable } from '@angular/core';
import { User } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  USER = {
    name: 'Tzvi',
    coins: 100,
    moves: []
  }

  constructor() { }

  getUser() :User  {
    return this.USER
  } 
}

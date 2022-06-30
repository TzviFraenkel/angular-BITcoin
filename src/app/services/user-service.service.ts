import { Injectable } from '@angular/core';
import { User } from '../models/user-model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedInUser: User = { name: '', coins: 100, moves: [] }

  constructor(private localStorageService: LocalStorageService) { }

  getLoggedInUser(): User {
    return this.loggedInUser
  }

  signUp(userName: string): void {
    let user = this._userFromStorage(userName)
    user ? this.loggedInUser = user : this._addUser(userName)
  }

  getUserById(name: string): User | undefined {
    const users: User[] = this.localStorageService.query('users')
    const user: User | undefined = users.find(user => user.name === name)
    return user
  }

  updateUser(user: User) {
    let users: User[] = this.localStorageService.query('users')
    users =  users.map(c => c.name === user.name ? user : c)
    this.localStorageService.save('users', users)
  }

  private _userFromStorage(userName: string): User | undefined {
    let users: User[] = this.localStorageService.query('users')
    let user: User | undefined
    user = users.find(user => user.name === userName)
    return user
  }

  private _addUser(userName: string): void {
    let newUser: User = { name: userName, coins: 100, moves: [] }
    let users: User[] = this.localStorageService.query('users')
    users.push(newUser)
    this.localStorageService.save('users', users)
    this.loggedInUser = newUser
  }

  // private _usersFromStorage(): User[] {
  //   let users: User[] = JSON.parse(localStorage.getItem('users') || '[]')
  //   return users
  // }
}

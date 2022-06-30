import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
  userName: string 
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  OnSignUp() {
    this.userService.signUp(this.userName)
    this.router.navigate([''])
  }
}

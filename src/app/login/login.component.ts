import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string= '';
  password: string= '';

  constructor(private router:Router, private cookie:CookieService) {

  }

  ngOnInit(): void {
  }

  goToHome(pagename: any) {
    // this.router.navigate([`${pagename}`])
    // alert(this.username)

    console.log(this.username, this.password)

    this.cookie.set("username","ankit");
    this.cookie.set("password","ankit");

    if (this.username == "ankit" && this.password == "ankit") {
      console.log(pagename)
      this.router.navigate([`${pagename}`])
      alert(`User ${this.cookie.get("username")} successfully logged in`)
    }
    else {
      alert('check user name and password')
    }
  }

}

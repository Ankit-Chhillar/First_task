import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userData: any = [
    {name:"ankit4",email:"test0@abc.com",contact:"1234567"},
    {name:"ankit1",email:"test1@abc.com",contact:"1234567"},
    {name:"ankit2",email:"test2@abc.com",contact:"1234567"},
    {name:"ankit3",email:"test3@abc.com",contact:"1234567"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  userNewData() {
    // console.log("Sorted By Index");
    let x = this.userData.sort((a: any,b: any)=> {
      return a.name > b.name;
    })
    console.log(x);
  }
}

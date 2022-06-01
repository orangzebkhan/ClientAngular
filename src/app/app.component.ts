import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  Users: any;constructor(private http: HttpClient , private accountServices: AccountService){}

  ngOnInit(): void {
    this.getUsers();
    this.setCurrentUser();
  }

  setCurrentUser(){
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountServices.setCurrentUser(user);
  }
  getUsers(){
    this.http.get('https://localhost:5001/api/Users').subscribe(Response => {
      this.Users = Response;
    },
    error =>{
      console.log(error);
    })
  }
}

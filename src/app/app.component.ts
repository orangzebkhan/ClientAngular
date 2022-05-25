import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  Users: any;
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.getUsers();
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

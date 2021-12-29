import { Component, OnInit } from '@angular/core';
import { LoginService } from './service/login.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'

})
export class AppComponent implements OnInit{
  isLoggedIn:boolean;
  constructor(private loginService:LoginService){

  }
  ngOnInit(): void {
    this.isLoggedIn=this.loginService.IsLogged();
  }
  Logout(){
    this.loginService.SetLogin(false);
    alert('Logged out');
  }
}

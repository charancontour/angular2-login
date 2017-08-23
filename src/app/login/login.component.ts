import { Component, OnInit } from '@angular/core';
import {AuthService, User} from '../auth.service';

@Component({
  selector: 'app-login',
  providers:[AuthService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = new User('','');
  public errorMsg = '';

  constructor(private _service:AuthService) { }

  ngOnInit() {
    this._service.isAGuest();
  }

  login() {
        if(!this._service.login(this.user)){
            this.errorMsg = 'Authentication Failed, Please use admin@admin.com, adm9 ';
        }
    }

}

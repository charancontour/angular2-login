import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-dashboard',
  providers: [AuthService],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  constructor(private _service:AuthService) { }

  ngOnInit() {
    this._service.isAUser();
  }

  logout() {
        this._service.logout();
  }

}

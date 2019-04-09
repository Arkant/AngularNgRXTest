import { IUser } from './../../shared/interfaces/user.interface';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.sass']
})
export class UserProfileComponent implements OnInit {
  user: IUser;
  constructor() { }

  ngOnInit() {
  }

}

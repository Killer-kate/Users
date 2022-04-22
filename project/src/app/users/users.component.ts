import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { USERS } from '../mock-user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  users = USERS;
  selectedUser?: User;

  constructor() { }

  ngOnInit() {
  }

  onSelect(users: User): void {
    this.selectedUser = users;
  }
}

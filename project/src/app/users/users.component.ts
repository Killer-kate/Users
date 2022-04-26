import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { USERS } from '../mock-user';

import { NgxDadataModule, DadataConfig, DadataType} from '@kolkov/ngx-dadata';

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

  configAddress: DadataConfig = {
    apiKey: '2e51c5fbc1a60bd48face95951108560bf03f7d9',
    type: DadataType.address,
  };
  configFio: DadataConfig = {
    apiKey: '2e51c5fbc1a60bd48face95951108560bf03f7d9',
    type: DadataType.fio,
  };

}

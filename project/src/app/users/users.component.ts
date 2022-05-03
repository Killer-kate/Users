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

  public users: User[] = [];
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

    private usersLoaded: number = 0; 
    private LOAD_USERS_ON_START: number = 25;
    private SCROLL_LOADING_GAP: number = 100;
    
    ngAfterViewInit(): void {
        document.addEventListener("scroll", () => {
          this.onScroll();
        });
    
        for (let i = 0; i < this.LOAD_USERS_ON_START; i++) {
           this.loadNewData();
        }
      }
    public onScroll() {
        if (this.isCameraTouchesBottom()) {
          this.loadNewData();
        }
      }
    
    public loadNewData(): void {
      if (this.usersLoaded >= USERS.length) return;
    
      this.users = [...this.users, USERS[this.usersLoaded]]
      this.usersLoaded++;
    }

    private isCameraTouchesBottom(): boolean {
      return (document.body.offsetHeight + document.body.offsetTop <= window.scrollY + window.innerHeight + this.SCROLL_LOADING_GAP);
    }
    
    }


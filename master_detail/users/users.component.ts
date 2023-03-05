import { Component } from '@angular/core';
import { User } from 'src/app/user';
import { USERS } from 'src/app/mock-users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent {

  users = USERS;
  selectedUser?: User;

  onSelect(user: User): void {
    this.selectedUser = user;
  }
}
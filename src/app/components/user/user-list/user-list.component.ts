import { Component, OnInit } from '@angular/core';
// interfaces
import { UserListInterface } from '../interfaces/user-list.interface';
// services
import { UserListService } from './uset-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {

  public users: UserListInterface[] = [];

  constructor(private userListService: UserListService) {
  }

  public ngOnInit(): void {
    this._updeteData();
  }

  public onFiltred(name: string): void {
    this._updeteData(name);
  }

  private _updeteData(name?: string) {
    this.userListService.getUsersByName(name)
      .subscribe({
        next: (data) => {
          if (data) {
            this.users = data.items || [];
          }
        }
      });
  }

}

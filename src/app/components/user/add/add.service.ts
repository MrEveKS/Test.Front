import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { BaseRequest } from 'src/app/shared/classes/base-request';
// interface
import { UserInterface } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AddService extends BaseRequest {

  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.controll = 'user';
  }

  public addUser(user: UserInterface): Observable<UserInterface> {
    return this.post<UserInterface>(user, 'postEntity');
  }

  public updateUser(user: UserInterface): Observable<UserInterface> {
    return this.put<UserInterface>(user, 'putEntity');
  }

  public getUser(id: number): Observable<UserInterface> {
    return this.get<UserInterface>({ id }, 'getEntity');
  }

  public deleteUser(id: number): Observable<boolean> {
    return this.delete<boolean>({ id }, 'postDelete');
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { BaseRequest } from 'src/app/shared/classes/base-request';
// interfaces
import { UserListInterface } from '../interfaces/user-list.interface';
import { QueryResult } from 'src/app/interfaces/query-result.interface';
import { UserFilter } from '../interfaces/user-filter.interface';
// models
import { QueryFilter } from 'src/app/models/query-filter';

@Injectable({
  providedIn: 'root'
})
export class UserListService extends BaseRequest {

  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.controll = 'user';
  }

  public getUsersByName(name?: string): Observable<QueryResult<UserListInterface>> {
    const filterQuery = new QueryFilter<UserFilter>({
      filter: {
        queryName: name
      }
    });
    return this.post<QueryResult<UserListInterface>>(filterQuery, 'postQuery');
  }

}

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// environment
import { environment } from 'src/environments/environment';

export class BaseRequest {
  private readonly API_URL = environment.apiUri;

  private headers = new HttpHeaders({ 'policy-name': '_corsOrigins', 'Content-Type': 'application/json' });

  protected controll: string;

  constructor(private httpClient: HttpClient) {
  }

  protected get<T, U = {}>(parametres?: U, methodName?: string): Observable<T> {
    let params: HttpParams = new HttpParams();
    // tslint:disable-next-line: no-unused-expression
    parametres && Object.keys(parametres).forEach((key) => {
      params = params.set(String(key), String(parametres[key]));
    });

    return this.httpClient.get(`${this.API_URL}/api/${this.controll}/${methodName || 'get'}`,
      { params, headers: this.headers })
      .pipe(
        map((data) => data as T)
      );
  }

  protected post<T, U = {}>(parametres?: U, methodName?: string): Observable<T> {
    return this.httpClient.post(`${this.API_URL}/api/${this.controll}/${methodName || 'post'}`,
      JSON.stringify(parametres), { headers: this.headers })
      .pipe(
        map((data) => data as T)
      );
  }

  protected put<T, U = {}>(parametres?: U, methodName?: string): Observable<T> {
    return this.httpClient.put(`${this.API_URL}/api/${this.controll}/${methodName || 'put'}`,
      JSON.stringify(parametres), { headers: this.headers })
      .pipe(
        map((data) => data as T)
      );
  }

  protected delete<T>(id?: number): Observable<T> {
    return this.httpClient.delete(`${this.API_URL}/api/${this.controll}/{id}`, { headers: this.headers })
      .pipe(
        map((data) => data as T)
      );
  }

}

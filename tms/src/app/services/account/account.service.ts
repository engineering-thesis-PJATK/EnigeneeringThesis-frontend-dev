import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Account } from 'src/app/models/account';
import { Credentials } from 'src/app/models/credentials';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) { 

  }

  postApiKey(credentials: Credentials): Observable<string[]> {
    return this.http.post<string[]>(this.url+'/login', credentials).pipe(tap(console.log));//, catchError(this.handleError));
  }

  registerAccount(account: Account): Observable<string[]> {
    return this.http.post<string[]>(this.url+'/signup', account).pipe(tap(console.log));
  }

  getAccountDetails() {
    
  }

  private handleError(error: HttpErrorResponse) {
    console.error(
      `Name: ${error.name} \n`+
      `Message: ${error.message} \n`+
      `Status code: ${error.status} \n`
    );
    //return throwError('Something bad happend; please try again later.');
    // return throwError(() => new Error('bad' + Date.now())).subscribe({
    //   error: console.error 
    // })
  }
}

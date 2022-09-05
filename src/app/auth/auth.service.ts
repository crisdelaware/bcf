import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient ) { }

  private API_KEY:string = 'AIzaSyA9H04xnVJYGPh6FiKmXxnxBoRnZ05L12c';
  private Url: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp'

  private baseUrl: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA9H04xnVJYGPh6FiKmXxnxBoRnZ05L12c';

  private signIn: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA9H04xnVJYGPh6FiKmXxnxBoRnZ05L12c'

  signupNewUser( user: any ): Observable<any> {
    return this.http.post(`${this.baseUrl}`, user)
  }
  
  signInWithPassword( user: any ): Observable<any> {
    return this.http.post(`${this.signIn}`, user)
  }

  

}

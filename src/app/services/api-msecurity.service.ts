import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {JwtToken} from "../models/auth/jwt-token";

@Injectable({
  providedIn: 'root'
})
export class ApiMsecurityService implements OnInit {

  authenticationUrl: string = "http://localhost:8089/api/auth/authenticate";
  registrationUrl: string = "http://localhost:8089/api/auth/register";
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

/*  getLogin(): Observable<JwtToken[]> {
    return this.http.get<JwtToken[]>("http://localhost:8089/api/auth/authenticate");
  }*/

  jwtAuthenticate(token: JwtToken) {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+ JwtToken});
    const body = '';
    return this.http.post(this.authenticationUrl, body, {headers}).subscribe({});
  }

  postLoginForm(body: string) {
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.authenticationUrl, body, {headers}).subscribe({});
  }
}

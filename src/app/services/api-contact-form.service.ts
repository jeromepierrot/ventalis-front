import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiContactFormService {

  header?:HttpHeaders;
  body!: any;

  constructor(private http: HttpClient) { }

  submitForm(formValue: any): void {
    this.body = formValue;
    console.log(this.body);
    this.http.post('http://localhost:3000/contact', this.body);
  }
}

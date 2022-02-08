import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private url: string = "https://formsubmit.co/cjhawes.cs@gmail.com";

  constructor(private http: HttpClient) { }

  sendMail(input: any) {
    return this.http.post(this.url, input, {responseType: 'text'})
      .pipe(
        map(
          (response) => {
            return response;
          },
          (error: any) => {
            return error;
          }
        )
      );
  }
}

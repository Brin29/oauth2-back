import { Component } from '@angular/core';

import { MyHttpClientService } from "../my-http-client.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  url: string = "";

  constructor(private http: MyHttpClientService) {}

  ngOnInit(): void {
    this.http.get("/auth/url").subscribe((data: any) => {
      this.url = data.url;
    });
  }
}

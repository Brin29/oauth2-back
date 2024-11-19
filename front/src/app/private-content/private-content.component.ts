import { Component } from '@angular/core';

import { MyHttpClientService } from "../my-http-client.service";
import { Message } from "../message";

@Component({
  selector: 'app-private-content',
  templateUrl: './private-content.component.html',
  styleUrl: './private-content.component.css'
})
export class PrivateContentComponent {

  content: string = "";

  constructor(private http: MyHttpClientService){}

  ngOnInit(): void {
    this.http.getPrivate("/messages").subscribe((data: Message) => {
      this.content = data.message;
    })
  };
}

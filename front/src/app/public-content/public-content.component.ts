import { Component } from '@angular/core';

import { MyHttpService } from "../my-http-client.service";
import { Message } from "../message";

@Component({
  selector: 'app-public-content',
  templateUrl: './public-content.component.html',
  styleUrl: './public-content.component.css'
})
export class PublicContentComponent {
  content: string = "";

  constructor(private http: MyHttpService){}

    ngOnInit(): void {
      this.http.get("/public/messages").subscribe((data: Message) => {
        this.content = data.message;
      })
    };
}

import { Component } from '@angular/core';

import { MyHttpClientService } from "./my-http-client.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  componentToShow: string = "public";

  constructor(private http: MyHttpClientService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params["code"] !== undefined) {
        this.http.getToken(params["code"]).subscribe(result => {
          if (result == true){
            this.componentToShow = "private";
          }
          else {
            this.componentToShow = "public"
          }
        })
      }
    })
    
  }
}

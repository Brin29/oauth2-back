import { Component } from '@angular/core';

import { MyHttpService } from "../my-http-client.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  componentToShow: string = "public";

  constructor(private http: MyHttpService, private route: ActivateRoute){}

   ng0nInit(): void {
     this.route.queryParams.subscribe(params => {
       if (params["code"] !== undefined){
            this.http.getToken(params["code"]).subscribe(result => {
              if (result == true){
                this.componentToShow = "private";
              }
              else{
                this.componentToShow == "public"
                }
             });
         }
       })
  }
}

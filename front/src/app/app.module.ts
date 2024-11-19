import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PublicContentComponent } from './public-content/public-content.component';
import { PrivateContentComponent } from './private-content/private-content.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    PublicContentComponent,
    PrivateContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

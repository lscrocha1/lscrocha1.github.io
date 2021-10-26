import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppHome } from './app-home/app-home';
import { AppProfile } from './app-profile/app-profile';

@NgModule({
  declarations: [
    AppHome,
    AppProfile
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppHome]
})
export class AppModule { }

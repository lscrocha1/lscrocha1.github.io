import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppHome } from './app-home/app-home';
import { AppProfile } from './app-profile/app-profile';
import { AppContact } from './app-contact/app-contact';
import { AppNavbar } from './app-navbar/app-navbar';

@NgModule({
  declarations: [
    AppHome,
    AppProfile,
    AppContact,
    AppNavbar,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppHome]
})
export class AppModule { }

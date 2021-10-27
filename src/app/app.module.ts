import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppHome } from './app-home/app-home';
import { AppProfile } from './app-profile/app-profile';
import { AppContact } from './app-contact/app-contact';
import { AppNavbar } from './app-navbar/app-navbar';
import { AppFooter } from './app-footer/app-footer';

@NgModule({
  declarations: [
    AppHome,
    AppProfile,
    AppContact,
    AppNavbar,
    AppFooter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppHome]
})
export class AppModule { }

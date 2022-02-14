import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppHome } from './app-home/app-home';
import { AppProfile } from './app-profile/app-profile';
import { AppContact } from './app-contact/app-contact';
import { AppNavbar } from './app-navbar/app-navbar';
import { AppFooter } from './app-footer/app-footer';
import { AppAboutMe } from './app-about-me/app-about-me';
import { AppPortfolio } from './app-portfolio/app-portfolio';
import { AppPrivacyTerms } from './app-privacy-terms/app-privacy-terms';
import { AppTermsOfUse } from './app-terms-of-use/app-terms-of-use';
import { AppModal } from './app-modal/app-modal';
import { AppComponent } from './app-component/app-component';
import { AppBlog } from './app-blog/app-blog';
import { AppBlogHeader } from './app-blog-header/app-blog-header';
import { AppBlogDetail } from './app-blog-detail/app-blog-detail';
import { AppNotFound } from './app-not-found/app-not-found';

@NgModule({
  declarations: [
    AppHome,
    AppProfile,
    AppContact,
    AppNavbar,
    AppFooter,
    AppAboutMe,
    AppPortfolio,
    AppPrivacyTerms,
    AppTermsOfUse,
    AppModal,
    AppComponent,
    AppBlog,
    AppBlogHeader,
    AppBlogDetail,
    AppNotFound
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

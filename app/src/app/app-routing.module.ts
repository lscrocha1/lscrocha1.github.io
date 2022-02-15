import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppBlog } from './app-blog/app-blog';
import { AppHome } from './app-home/app-home';
import { AppBlogDetail } from './app-blog-detail/app-blog-detail';
import { AppNotFound } from './app-not-found/app-not-found';
import { AppBlogNewPost } from './app-blog-new-post/app-blog-new-post';

const routes: Routes = [
  { path: '', component: AppHome },
  { path: 'blog', component: AppBlog },
  { path: 'blog/:id', component: AppBlogDetail },
  { path: 'new-post', component: AppBlogNewPost },
  { path: '404', component: AppNotFound },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: location.href.indexOf('github') > 0 })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppBlog } from './app-blog/app-blog';
import { AppHome } from './app-home/app-home';
import { AppBlogDetail } from './app-blog-detail/app-blog-detail';

const routes: Routes = [
  { path: '', component: AppHome },
  { path: 'blog', component: AppBlog },
  { path: 'blog/:id', component: AppBlogDetail }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

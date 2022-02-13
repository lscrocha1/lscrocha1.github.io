import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppBlog } from './app-blog/app-blog';
import { AppHome } from './app-home/app-home';

const routes: Routes = [
  { path: '', component: AppHome },
  { path: 'blog', component: AppBlog }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

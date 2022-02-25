import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppBlog } from './app-blog/app-blog';
import { AppHome } from './app-home/app-home';
import { AppBlogDetail } from './app-blog-detail/app-blog-detail';
import { AppNotFound } from './app-not-found/app-not-found';
import { AppBlogNewPost } from './app-blog-new-post/app-blog-new-post';
import authService from './base/auth-service';
import { AppLogin } from './app-login/app-login';
import { AppApproveComments } from './app-approve-comments/app-approve-comments';

const routes: Routes = getRoutes();

function getRoutes() {
	let userHasToken = authService.getToken();

	let result: Routes = [
		{ path: '', component: AppHome },
		{ path: 'blog', component: AppBlog },
		{ path: 'blog/tags/:id', component: AppBlog },
		{ path: 'blog/:id', component: AppBlogDetail },
		{ path: 'login', component: AppLogin }
	];

	if (userHasToken) {
		result.push({ path: 'blog/new-post', component: AppBlogNewPost });
		result.push({ path: 'blog/approve-comments', component: AppApproveComments });
		result.push({ path: 'blog/edit/:id', component: AppBlogNewPost });
	}

	result.push({ path: '404', component: AppNotFound });
	result.push({ path: '**', redirectTo: '/404' });

	return result;
}

@NgModule({
	imports: [RouterModule.forRoot(
		routes, {
		useHash: location.href.indexOf('github') > 0
	})],
	exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';
import { BaseComponent } from '../base/base-component';
import { ListPostDto } from '../base/types';
import appBlogService from './app-blog-service';
import { formatDate } from '../base/util';

@Component({
    selector: 'app-blog',
    templateUrl: './app-blog.html',
    styleUrls: ['./app-blog.scss', '../../common.css']
})
export class AppBlog extends BaseComponent {
    posts: ListPostDto[] = [];

    search: string = "";

    tag: number = 0;

    limit: number = 10;

    quantityLastFetch: number = 0;

    currentPage: number = 1;

    hasNextPage: boolean = false;

    ngOnInit() {
        this.loadPosts();
    }

    formatDate(date: string) {
        return formatDate(date);
    }

    changePage(pageToAdd: number) {
        this.currentPage += pageToAdd;

        if (this.currentPage <= 0)
            this.currentPage = 1;

        this.loadPosts();
    }

    async loadPosts() {
        let posts = await appBlogService.getPosts(
            this.search,
            this.tag,
            this.currentPage,
            this.limit);

        this.quantityLastFetch = posts.length;

        if (this.quantityLastFetch == 0) {
            this.currentPage -= 1;

            await this.loadPosts();

            this.hasNextPage = false;

            return;
        }

        this.hasNextPage = this.limit == this.quantityLastFetch;

        this.posts = posts;
    }
}
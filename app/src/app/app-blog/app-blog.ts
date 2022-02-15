import { Component } from '@angular/core';
import { BaseComponent } from '../base/base-component';
import { PostsDto } from '../base/types';
import appBlogService from './app-blog-service';
import { formatDate, goTo } from '../base/util';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-blog',
    templateUrl: './app-blog.html',
    styleUrls: ['./app-blog.scss', '../../common.css']
})
export class AppBlog extends BaseComponent {
    posts: PostsDto[] = [
        {
            createdAt: '',
            description: '',
            imageDisplay: '',
            postId: 0,
            title: '',
            quantityComments: 0,
            tags: []
        }
    ];

    search: string = "";

    tag: number = 0;

    limit: number = 10;

    quantityLastFetch: number = 0;

    currentPage: number = 1;

    hasNextPage: boolean = false;

    constructor(private route: ActivatedRoute) {
        super();
    }

    ngOnInit() {
        this.loadPosts();
    }

    searchByTag(tagId: number) {
        goTo(`/blog?tag=${tagId}`);
    }

    formatDate(date: string) {
        return formatDate(date);
    }

    getCommentText(quantity: number) {
        if (quantity <= 1)
            return this.t('blogSingleComment');

        return this.t('blogMultipleComments');
    }

    changePage(pageToAdd: number) {
        this.currentPage += pageToAdd;

        if (this.currentPage <= 0)
            this.currentPage = 1;

        this.loadPosts();
    }

    async loadPosts() {
        if (this.route.queryParams && (this.route.queryParams as any).value && (this.route.queryParams as any).value.tag)
            this.tag = (this.route.queryParams as any).value.tag;

        let posts = await appBlogService.getPosts(
            this.search,
            this.tag,
            this.currentPage,
            this.limit);

        this.quantityLastFetch = posts.length;

        if (this.quantityLastFetch == 0 && this.currentPage > 1) {
            this.currentPage -= 1;

            await this.loadPosts();

            this.hasNextPage = false;

            return;
        }

        this.hasNextPage = this.limit == this.quantityLastFetch;

        this.posts = posts;
    }
}
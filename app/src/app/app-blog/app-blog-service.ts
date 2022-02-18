import translationService from "../base/translation-service";
import { AddCommentDto, PostDto, ReplyCommentDto, Post } from "../base/types";
import { goTo } from "../base/util";
import env from "../env/env";

class AppBlogService {
    async getPosts(search: string = "", tag: number = 0, page: number = 1, limit: number = 10): Promise<Post[]> {
        let url = `${env.apiurl}/v1/post?page=${page}&limit=${limit}`;

        if (search)
            url = `${url}&search=${search}`;

        if (tag > 0)
            url = `${url}&tag=${tag}`;

        let response = await fetch(encodeURI(url), {
            headers: {
                'Content-Language': translationService.getCurrentSelectedLanguage(),
                'Content-Type': 'application/json'
            }
        });

        if (response.status != 200)
            return [];

        return await response.json();
    }

    async getPost(postId: string): Promise<PostDto> {
        let url = `${env.apiurl}/v1/post/${postId}`;

        let response = await fetch(encodeURI(url), {
            headers: {
                'Content-Language': translationService.getCurrentSelectedLanguage(),
                'Content-Type': 'application/json'
            }
        });

        if (response.status != 200)
            goTo("/404");

        return await response.json();
    }

    async addComment(postId: string, dto: AddCommentDto) {
        let url = `${env.apiurl}/v1/comment/${postId}`;

        await fetch(encodeURI(url), {
            headers: {
                'Content-Language': translationService.getCurrentSelectedLanguage(),
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(dto)
        });
    }

    async replyComment(postId: string, commentId: string, dto: ReplyCommentDto) {
        let url = `${env.apiurl}/v1/comment/post/${postId}/comment/${commentId}`;

        await fetch(encodeURI(url), {
            headers: {
                'Content-Language': translationService.getCurrentSelectedLanguage(),
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(dto)
        });
    }
}

export default new AppBlogService();
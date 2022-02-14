import translationService from "../base/translation-service";
import { AddCommentDto, ListPostDto, PostDto } from "../base/types";
import env from "../env/env";

class AppBlogService {
    async getPosts(search: string = "", tag: number = 0, page: number = 1, limit: number = 10): Promise<ListPostDto[]> {
        let url = `${env.apiurl}/v1/post?page=${page}&limit=${limit}`;

        if (search)
            url = `${url}&search=${search}`;

        if (tag > 0)
            url = `${url}&tag=${tag}`;

        let response = await fetch(encodeURI(url), {
            headers: {
                'Content-Language': translationService.getCurrentSelectedLanguage()
            }
        });

        if (response.status != 200)
            return [];

        return await response.json();
    }

    async getPost(postId: string) : Promise<PostDto> {
        let url = `${env.apiurl}/v1/post/${postId}`;

        let response = await fetch(encodeURI(url), {
            headers: {
                'Content-Language': translationService.getCurrentSelectedLanguage()
            }
        });

        if (response.status != 200)
            location.href = "/#/404"

        return await response.json();
    }

    async addComment(postId: number, dto: AddCommentDto) {
        let url = `${env.apiurl}/v1/comment/${postId}`;

        await fetch(encodeURI(url), {
            headers: {
                'Content-Language': translationService.getCurrentSelectedLanguage()
            },
            method: 'POST',
            body: JSON.stringify(dto)
        });
    }

    async replyComment(postId: number, commentId: number, dto: AddCommentDto) {
        let url = `${env.apiurl}/v1/comment/post/${postId}/comment/${commentId}`;

        await fetch(encodeURI(url), {
            headers: {
                'Content-Language': translationService.getCurrentSelectedLanguage()
            },
            method: 'POST',
            body: JSON.stringify(dto)
        });
    }
}

export default new AppBlogService();
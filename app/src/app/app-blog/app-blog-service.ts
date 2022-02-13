import translationService from "../base/translation-service";
import { ListPostDto } from "../base/types";
import env from "../env/env";

class AppBlogService {
    async getPosts(search: string = "", tag: number = 0, page: number = 1, limit: number = 10) : Promise<ListPostDto[]>{
        var url = `${env.apiurl}/v1/post?page=${page}&limit=${limit}`;

        if (search)
            url = `${url}&search=${search}`;

        if (tag > 0)
            url = `${url}&tag=${tag}`;

        var response = await fetch(encodeURI(url), {
            headers: {
                'Content-Language': translationService.getCurrentSelectedLanguage()
            }
        });

        if (response.status != 200)
            return [];
    
        return await response.json();
    }
}

export default new AppBlogService();
import authService from "../base/auth-service";
import translationService from "../base/translation-service";
import { ApproveDenyCommentDto, CommentToBeApprovedDto } from "../base/types";
import env from "../env/env";

class AppApproveCommentsService {
    async getCommentsToBeApproved(page: number = 1, limit: number = 10): Promise<CommentToBeApprovedDto[]> {
        let url = `${env.apiurl}/v1/comment/comments/approve?page=${page}&limit=${limit}`;

        let response = await fetch(encodeURI(url), {
            headers: {
                'Content-Language': translationService.getCurrentSelectedLanguage(),
                'Content-Type': 'application/json',
                'Authorization': authService.getToken(),
                'UUID': prompt('UUID') ??''
            }
        });

        if (response.status != 200)
            return [];

        return await response.json();
    }

    async approveDenyComment(dto: ApproveDenyCommentDto) {
        let url = `${env.apiurl}/v1/comment/comments/approve/`;

        await fetch(encodeURI(url), {
            headers: {
                'Content-Language': translationService.getCurrentSelectedLanguage(),
                'Content-Type': 'application/json',
                'Authorization': authService.getToken(),
                'UUID': prompt('UUID') ??''
            },
            method: 'POST',
            body: JSON.stringify(dto)
        })
    }
}

export default new AppApproveCommentsService();
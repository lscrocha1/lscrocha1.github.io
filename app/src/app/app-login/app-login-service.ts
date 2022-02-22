import translationService from "../base/translation-service";
import { LoginDto } from "../base/types";
import env from "../env/env";

class AppLoginService {
    async login(dto: LoginDto): Promise<string> {    
        let url = `${env.apiurl}/v1/login`;

        let result = await fetch(url, {
            body: JSON.stringify(dto),
            method: 'POST',
            headers: {
                'Content-Language': translationService.getCurrentSelectedLanguage(),
                'Content-Type': 'application/json',
                'UUID': prompt('UUID') ?? ""
            }
        });

        if (result.status != 200)
            return null!;

        return await result.text();
    }
}

export default new AppLoginService();
class AuthService {
    private authKey = "lscrocha-blog-auth-key";

    getToken() {
        return localStorage.getItem(this.authKey);
    }

    setToken(token: string) {
        localStorage.setItem(this.authKey, token);
    }
}

export default new AuthService();
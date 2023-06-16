export class LoginCredential {
    userEmail: string;
    password: string;

    constructor(userEmail, password) {
        this.userEmail = userEmail;
        this.password = password;
    }
}

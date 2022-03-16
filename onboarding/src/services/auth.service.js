class AuthService {
    constructor(repository) {
        this._repository = repository;
        this._register = this.register.bind(this);
        this._login = this.login.bind(this);
        this._logout = this.logout.bind(this);
        this._forgotPassword = this.forgotPassword.bind(this);
    }

    async register(email, password) {
        const user = await this._repository.createUser(email, password);
        return user;
    }

    async login(email, password) {
        const user = await this._repository.getUserByEmail(email);
        if (user.password !== password) {
            throw new Error('Wrong password');
        }
        return user;
    }

    async logout(token) {
        await this._repository.logout(token)
            .catch(err => {
                console.log(err);
                throw err;
            });
    }

    async forgotPassword(email) {
        console.log(email);
        const user = await this._repository.getUserByEmail(email)
            .catch(err => {
                console.log(err);
                throw err;
            });
        return user;
    }
}

module.exports = AuthService;
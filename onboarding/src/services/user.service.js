class UserService {
    constructor(repository) {
        this._repository = repository;
        this._getAllUsers = this.getAllUsers.bind(this);
        this._getUserById = this.getUserById.bind(this);
    }

    async getAllUsers() {
        return await this._repository.getAllUsers()
            .catch(err => {
                console.log(err);
                throw err;
            });
    }

    async getUserById(id) {
        return await this._repository.getUserById(id)
            .catch(err => {
                console.log(err);
                throw err;
            });
    }
}

module.exports = UserService;
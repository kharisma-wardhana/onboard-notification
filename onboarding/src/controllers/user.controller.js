class UserController {
    constructor(service) {
        this._service = service;
        this.getAllUsers = this.getAllUsers.bind(this);
        this.getUserById = this.getUserById.bind(this);
    }

    async getAllUsers(_, res) {
        await this._service.getAllUsers()
            .then(users => {
                return res.json(users);
            })
            .catch(err => {
                console.log(err);
                return res.status(500).json({
                    message: 'Internal server error'
                });
            });
    }

    async getUserById(req, res) {
        const { id } = req.params;
        await this._service.getUserById(id)
            .then(user => {
                return res.json(user);
            })
            .catch(err => {
                console.error(err);
                return res.status(500).json({
                    message: 'Internal server error'
                });
            });
    }
}

module.exports = UserController;
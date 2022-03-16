class AuthController {
    constructor(service, messageService) {
        this._service = service;
        this._messageService = messageService;
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.forgotPassword = this.forgotPassword.bind(this);
    }

    async register(req, res) {
        const { email, password } = req.body;
        await this._service.register(email, password)
            .then(user => {
                let message = {
                    "targetEmail": `${email}`,
                    "content": `User ${email} successfully registered`,
                };
                this._messageService.sendMessage('notification', message);
                return res.json(user);
            })
            .catch(err => {
                console.error(err);
                return res.status(500).json({
                    message: 'Internal server error'
                });
            });
    }

    async login(req, res) {
        const { email, password } = req.body;
        await this._service.login(email, password)
            .then(user => {
                let message = {
                    "targetEmail": `${user.email}`,
                    "content": `User ${user.email} successfully login`,
                };
                this._messageService.sendMessage('notification', message);
                return res.json(user);
            })
            .catch(err => {
                console.error(err);
                return res.status(500).json({
                    message: 'Internal server error'
                });
            });
    }

    async logout(req, res) {
        const { token } = req.body;
        await this._service.logout(token)
            .then(data => {
                console.log(data);
                return res.json({
                    message: 'Logout successful'
                });
            }
            ).catch(err => {
                console.error(err);
                return res.status(500).json({
                    message: 'Internal server error'
                });
            });
    }

    async forgotPassword(req, res) {
        const { email } = req.body;
        await this._service.forgotPassword(email)
            .then(user => {
                console.log(user);
                let message = {
                    "targetEmail": `${user.email}`,
                    "content": `Password reset link sent to ${user.email}`,
                };
                this._messageService.sendMessage('notification', message);
                return res.json({
                    message: 'Password reset link sent'
                });
            }).catch(err => {
                console.error(err);
                return res.status(500).json({
                    message: 'Internal server error'
                });
            });
    }
}

module.exports = AuthController;
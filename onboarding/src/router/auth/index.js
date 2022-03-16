const express = require('express');
const router = express.Router();

const AuthController = require('../../controllers/auth.controller');
const AuthService = require('../../services/auth.service');
const MessageService = require('../../services/message.service');
const UserRepository = require('../../repository/user.repository');

const repository = new UserRepository();
const service = new AuthService(repository);
const messageService = new MessageService();
const controller = new AuthController(service, messageService);

router.post('/register', controller.register);
router.post('/login', controller.login);
router.post('/logout', controller.logout);
router.post('/forgot-password', controller.forgotPassword);

module.exports = router;
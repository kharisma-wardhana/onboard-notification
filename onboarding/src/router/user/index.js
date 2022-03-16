const express = require('express');
const router = express.Router();

const UserController = require('../../controllers/user.controller');
const UserService = require('../../services/user.service');
const UserRepository = require('../../repository/user.repository');

const repository = new UserRepository();
const service = new UserService(repository);
const controller = new UserController(service);

router.get('/', controller.getAllUsers);
router.get('/:id', controller.getUserById);

module.exports = router;
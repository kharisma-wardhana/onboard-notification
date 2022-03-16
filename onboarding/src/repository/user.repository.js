const { Pool } = require('pg');
const { nanoid } = require('nanoid');

class UserRepository {
    constructor() {
        this._pool = new Pool();
        this._getAllUsers = this.getAllUsers.bind(this);
        this._getUserById = this.getUserById.bind(this);
        this._getUserByEmail = this.getUserByEmail.bind(this);
        this._createUser = this.createUser.bind(this);
    }

    async getAllUsers() {
        const query = 'SELECT id, email FROM users';
        const { rows } = await this._pool.query(query);
        if (!rows.length) {
            throw new Error('No users found');
        }
        return rows;
    }

    async getUserById(id) {
        const query = 'SELECT id, email FROM users WHERE id = $1';
        const { rows } = await this._pool.query(query, [id]);
        if (!rows.length) {
            throw new Error('No user found');
        }
        return rows[0];
    }

    async getUserByEmail(email) {
        const query = 'SELECT id, email FROM users WHERE email = $1';
        const { rows } = await this._pool.query(query, [email]);
        if (!rows.length) {
            throw new Error('No user found');
        }
        return rows[0];
    }

    async createUser(email, password) {
        const id = `user-${nanoid(16)}`;
        const query = 'INSERT INTO users (id, email, password) VALUES ($1, $2, $3) RETURNING id, email';
        const { rows } = await this._pool.query(query, [id, email, password]);
        if (!rows.length) {
            throw new Error('No user found');
        }
        return rows[0];
    }
}

module.exports = UserRepository;
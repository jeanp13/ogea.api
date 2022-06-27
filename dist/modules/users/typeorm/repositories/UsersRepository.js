"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dataSource = require("../../../../data-source");

var _User = require("../entities/User");

class UsersRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = _dataSource.AppDataSource.getRepository(_User.User);
  }

  async findById(id) {
    const findUser = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    return findUser;
  }

  async findByEmail(email) {
    const findUser = await this.ormRepository.findOne({
      where: {
        email
      }
    });
    return findUser;
  }

  async create({
    name,
    email,
    password
  }) {
    const user = this.ormRepository.create({
      name,
      email,
      password
    });
    await this.ormRepository.save(user);
    return user;
  }

  async save(user) {
    await this.ormRepository.save(user);
    return user;
  }

  async findAll() {
    const users = await this.ormRepository.find();
    return users;
  }

  get userRepository() {
    return this.ormRepository;
  }

}

var _default = UsersRepository;
exports.default = _default;
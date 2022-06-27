"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dataSource = require("../../../../data-source");

var _UserToken = require("../entities/UserToken");

class UserTokenRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = _dataSource.AppDataSource.getRepository(_UserToken.UserToken);
  }

  async findByToken(token) {
    const userToken = await this.ormRepository.findOne({
      where: {
        token
      }
    });
    return userToken;
  }

  async generate(user_id) {
    const userToken = this.ormRepository.create({
      user_id
    });
    await this.ormRepository.save(userToken);
    return userToken;
  }

  get tokenRepository() {
    return this.ormRepository;
  }

}

var _default = UserTokenRepository;
exports.default = _default;
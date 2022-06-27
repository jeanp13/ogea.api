"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _uuid = require("uuid");

var _dataSource = require("../../../data-source");

var _AppError = _interopRequireDefault(require("../../../errors/AppError"));

var _IHashProvider = _interopRequireDefault(require("../models/IHashProvider"));

var _User = require("../typeorm/entities/User");

var _dec, _dec2, _dec3, _dec4, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CreateUserService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('HashProvider')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IHashProvider.default === "undefined" ? Object : _IHashProvider.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateUserService {
  constructor(hashProvider) {
    this.hashProvider = hashProvider;
    this._repository = void 0;
    this._repository = _dataSource.AppDataSource.getRepository(_User.User);
  }

  async execute({
    name,
    email,
    password,
    avatar,
    storeId
  }) {
    const userRepository = await this._repository.findOne({
      where: {
        email
      }
    });
    if (userRepository) throw new _AppError.default('Email address already used');

    if (!storeId) {
      storeId = (0, _uuid.v4)();
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    const user = this._repository.create({
      name,
      email,
      password: hashedPassword,
      avatar,
      storeId
    });

    const savedUser = await this._repository.save(user);
    return savedUser;
  }

}) || _class) || _class) || _class) || _class);
var _default = CreateUserService;
exports.default = _default;
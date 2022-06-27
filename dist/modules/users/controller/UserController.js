"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserController = void 0;

var _tsyringe = require("tsyringe");

var _classTransformer = require("class-transformer");

var _CreateUserService = _interopRequireDefault(require("../services/CreateUserService"));

var _ShowProfileService = _interopRequireDefault(require("../services/ShowProfileService"));

var _UpdateProfileService = _interopRequireDefault(require("../services/UpdateProfileService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UserController {
  async createUser(request, response) {
    const {
      name,
      email,
      password,
      avatar,
      storeId
    } = request.body;

    const createUser = _tsyringe.container.resolve(_CreateUserService.default);

    const user = await createUser.execute({
      name,
      email,
      password,
      avatar,
      storeId
    });
    return response.json({
      user: (0, _classTransformer.classToClass)(user)
    });
  }

  async show(request, response) {
    try {
      const user_id = request.user.id;

      const showProfile = _tsyringe.container.resolve(_ShowProfileService.default);

      const user = await showProfile.execute({
        user_id
      });
      return response.json({
        user: (0, _classTransformer.classToClass)(user)
      });
    } catch (err) {
      return response.status(400).json({
        message: err.message
      });
    }
  }

  async showAll(request, response) {
    try {
      // const user_id = request.user.id;
      const showProfile = _tsyringe.container.resolve(_ShowProfileService.default);

      const user = await showProfile.findAll();
      return response.json({
        user: (0, _classTransformer.classToClass)(user)
      });
    } catch (err) {
      return response.status(400).json({
        message: err.message
      });
    }
  }

  async update(request, response) {
    try {
      const user_id = request.user.id;
      const {
        name,
        email,
        old_password,
        password
      } = request.body;

      const updateProfile = _tsyringe.container.resolve(_UpdateProfileService.default);

      const user = await updateProfile.execute({
        user_id,
        name,
        email,
        old_password,
        password
      });
      return response.json({
        user: (0, _classTransformer.classToClass)(user)
      });
    } catch (err) {
      return response.status(400).json({
        message: err.message
      });
    }
  }

}

exports.UserController = UserController;
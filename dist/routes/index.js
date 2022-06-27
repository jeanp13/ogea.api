"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _user = _interopRequireDefault(require("../modules/users/routes/user.routes"));

var _sessions = _interopRequireDefault(require("../modules/users/routes/sessions.routes"));

var _products = _interopRequireDefault(require("../modules/products/routes/products.routes"));

var _category = _interopRequireDefault(require("../modules/categories/routes/category.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)();
routes.use('/users', _user.default);
routes.use('/sessions', _sessions.default);
routes.use('/products', _products.default);
routes.use('/categories', _category.default);
var _default = routes; // import { UserController } from "../controller/UserController";
// export const Routes = [
//   { method: "get", route: "/users", controller: UserController, action: "all" },
//   {
//     method: "get",
//     route: "/users/:id",
//     controller: UserController,
//     action: "one",
//   },
//   {
//     method: "post",
//     route: "/users",
//     controller: UserController,
//     action: "createUser",
//   },
//   {
//     method: "post",
//     route: "/users/:id",
//     controller: UserController,
//     action: "save",
//   },
//   {
//     method: "delete",
//     route: "/users/:id",
//     controller: UserController,
//     action: "remove",
//   },
// ];

exports.default = _default;
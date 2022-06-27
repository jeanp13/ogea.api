"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _celebrate = require("celebrate");

var _auth = _interopRequireDefault(require("../../../middleware/auth"));

var _CategoriesController = _interopRequireDefault(require("../controller/CategoriesController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const categoriesRoutes = (0, _express.Router)();
const categoriesController = new _CategoriesController.default();
categoriesRoutes.use(_auth.default);
categoriesRoutes.get('/', categoriesController.show);
categoriesRoutes.post('/', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    title: _celebrate.Joi.string().required()
  }
}), categoriesController.create);
var _default = categoriesRoutes;
exports.default = _default;
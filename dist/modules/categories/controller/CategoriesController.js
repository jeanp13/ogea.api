"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _classTransformer = require("class-transformer");

var _CreateCategoryService = _interopRequireDefault(require("../services/CreateCategoryService"));

var _ShowCategoriesService = _interopRequireDefault(require("../services/ShowCategoriesService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CategoriesController {
  async create(request, response) {
    try {
      const {
        title
      } = request.body;

      const createCategory = _tsyringe.container.resolve(_CreateCategoryService.default);

      const category = await createCategory.execute({
        title
      });
      return response.json({
        category: (0, _classTransformer.classToClass)(category)
      });
    } catch (err) {
      return response.status(400).json({
        message: err.message
      });
    }
  }

  async show(request, response) {
    try {
      const showCategories = _tsyringe.container.resolve(_ShowCategoriesService.default);

      const categories = await showCategories.execute(); // Object.assign

      return response.json({
        categories: (0, _classTransformer.classToClass)(categories)
      });
    } catch (err) {
      return response.status(400).json({
        message: err.message
      });
    }
  }

}

exports.default = CategoriesController;
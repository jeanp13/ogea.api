"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _classTransformer = require("class-transformer");

var _CreateProductService = _interopRequireDefault(require("../services/CreateProductService"));

var _ReturnProductService = _interopRequireDefault(require("../services/ReturnProductService"));

var _ShowProductsCategoryService = _interopRequireDefault(require("../services/ShowProductsCategoryService"));

var _ShowProductsService = _interopRequireDefault(require("../services/ShowProductsService"));

var _UpdateProductService = _interopRequireDefault(require("../services/UpdateProductService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProductsController {
  async create(request, response) {
    try {
      const {
        amount,
        category_id,
        description,
        price,
        title,
        code
      } = request.body;
      const user_id = request.user.id;

      const createProduct = _tsyringe.container.resolve(_CreateProductService.default);

      const user = await createProduct.execute({
        amount,
        category_id,
        description,
        price,
        title,
        user_id,
        photo_url: '',
        code
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

  async update(request, response) {
    try {
      const {
        amount,
        category_id,
        description,
        price,
        title,
        code
      } = request.body; // console.log(request.file.filename);

      let photo_url = null;
      if (request.file) photo_url = request.file.filename;
      console.log(photo_url);
      const {
        product_id
      } = request.params; // console.log(product_id);

      const user_id = request.user.id;

      const updateProduct = _tsyringe.container.resolve(_UpdateProductService.default);

      const product = await updateProduct.execute({
        product_id,
        amount,
        category_id,
        description,
        price,
        title,
        user_id,
        photo_url,
        code
      });
      return response.json({
        product: (0, _classTransformer.classToClass)(product)
      });
    } catch (err) {
      return response.status(400).json({
        message: err.message
      });
    }
  }

  async show(request, response) {
    try {
      const showProducts = _tsyringe.container.resolve(_ShowProductsService.default);

      const products = await showProducts.execute();
      return response.json({
        products: (0, _classTransformer.classToClass)(products)
      });
    } catch (err) {
      return response.status(400).json({
        message: err.message
      });
    }
  }

  async find(request, response) {
    try {
      const {
        id
      } = request.params;

      const showProducts = _tsyringe.container.resolve(_ReturnProductService.default);

      const product = await showProducts.execute({
        id
      });
      return response.json({
        product: (0, _classTransformer.classToClass)(product)
      });
    } catch (err) {
      return response.status(400).json({
        message: err.message
      });
    }
  }

  async showByCategory(request, response) {
    try {
      const {
        category_id
      } = request.params;

      const showProductsCategory = _tsyringe.container.resolve(_ShowProductsCategoryService.default);

      const products = await showProductsCategory.execute({
        category_id
      });
      return response.json({
        products: (0, _classTransformer.classToClass)(products)
      });
    } catch (err) {
      return response.status(400).json({
        message: err.message
      });
    }
  }

}

exports.default = ProductsController;
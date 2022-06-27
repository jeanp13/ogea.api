"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _AppError = _interopRequireDefault(require("../../../errors/AppError"));

var _IStorageProvider = _interopRequireDefault(require("../../../providers/StorageProvider/models/IStorageProvider"));

var _IProductsRepository = _interopRequireDefault(require("../repositories/IProductsRepository"));

var _dec, _dec2, _dec3, _dec4, _dec5, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CreateProductService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('ProductsRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('StorageProvider')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IProductsRepository.default === "undefined" ? Object : _IProductsRepository.default, typeof _IStorageProvider.default === "undefined" ? Object : _IStorageProvider.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class CreateProductService {
  constructor(productsRepository, storageProvider) {
    this.productsRepository = productsRepository;
    this.storageProvider = storageProvider;
  }

  async execute({
    description,
    photo_url,
    price,
    title,
    category_id,
    user_id,
    amount,
    code
  }) {
    const checkUserExists = await this.productsRepository.findByDescription(description);

    if (checkUserExists) {
      throw new _AppError.default('Producto já cadastrado.');
    }

    const fileName = await this.storageProvider.saveFile(photo_url);
    const product = await this.productsRepository.create({
      description,
      amount,
      category_id,
      price,
      title,
      user_id,
      code,
      photo_url: fileName
    });
    return product;
  }

}) || _class) || _class) || _class) || _class) || _class);
var _default = CreateProductService;
exports.default = _default;
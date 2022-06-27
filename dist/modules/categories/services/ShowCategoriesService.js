"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _AppError = _interopRequireDefault(require("../../../errors/AppError"));

var _ICategoryRepository = _interopRequireDefault(require("../repositories/ICategoryRepository"));

var _dec, _dec2, _dec3, _dec4, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ShowCategoriesService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('CategoriesRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ICategoryRepository.default === "undefined" ? Object : _ICategoryRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ShowCategoriesService {
  constructor(categoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  async execute() {
    const categories = await this.categoriesRepository.listAll();

    if (!categories) {
      throw new _AppError.default('Nenhuma Categoria Encontrada.');
    }

    return categories;
  }

}) || _class) || _class) || _class) || _class);
var _default = ShowCategoriesService;
exports.default = _default;
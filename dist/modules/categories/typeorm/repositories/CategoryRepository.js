"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dataSource = require("../../../../data-source");

var _Category = _interopRequireDefault(require("../entities/Category"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CategoryRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = _dataSource.AppDataSource.getRepository(_Category.default);
  }

  async create({
    title
  }) {
    const category = this.ormRepository.create({
      title
    });
    await this.ormRepository.save(category);
    return category;
  }

  async findById(category_id) {
    const category = await this.ormRepository.findOne({
      where: {
        id: category_id
      }
    });
    return category;
  }

  async findByTitle(title) {
    const category = await this.ormRepository.findOne({
      where: {
        title
      }
    });
    return category;
  }

  async listAll() {
    const categories = await this.ormRepository.find({
      relations: ['products']
    });
    return categories;
  }

  async save(category) {
    await this.ormRepository.save(category);
    return category;
  }

}

var _default = CategoryRepository;
exports.default = _default;
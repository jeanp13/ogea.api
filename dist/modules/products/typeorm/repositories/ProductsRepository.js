"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dataSource = require("../../../../data-source");

var _Product = _interopRequireDefault(require("../entities/Product"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProductsRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = _dataSource.AppDataSource.getRepository(_Product.default);
  }

  async create({
    description,
    photo_url,
    price,
    title,
    category_id,
    user_id,
    amount,
    code
  }) {
    const product = this.ormRepository.create({
      description,
      amount,
      photo_url,
      price,
      title,
      category_id,
      user_id,
      code
    });
    await this.ormRepository.save(product);
    return product;
  }

  async findById(product_id) {
    const product = await this.ormRepository.findOne({
      where: {
        id: product_id
      }
    }); // const product = await this.ormRepository.findOne(product_id, {
    //   relations: ["category"],
    // });

    return product;
  }

  async findByDescription(description) {
    const product = await this.ormRepository.findOne({
      where: {
        description
      },
      relations: ['category']
    });
    return product;
  }

  async findByCategory(category_id) {
    const products = await this.ormRepository.find({
      where: {
        category_id
      },
      relations: ['category']
    });
    return products;
  }

  async listAll() {
    const products = await this.ormRepository.find({
      relations: ['category', 'user']
    });
    return products;
  }

  async save(product) {
    await this.ormRepository.save(product);
    return product;
  }

}

var _default = ProductsRepository;
exports.default = _default;
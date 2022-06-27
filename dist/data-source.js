"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppDataSource = void 0;

require("reflect-metadata");

var _typeorm = require("typeorm");

var _Category = _interopRequireDefault(require("./modules/categories/typeorm/entities/Category"));

var _Incoming = _interopRequireDefault(require("./modules/incoming/typeorm/entities/Incoming"));

var _Inventory = _interopRequireDefault(require("./modules/inventory/typeorm/entities/Inventory"));

var _PaymentMethod = _interopRequireDefault(require("./modules/payments_method/typeorm/entities/PaymentMethod"));

var _Product = _interopRequireDefault(require("./modules/products/typeorm/entities/Product"));

var _Sales = _interopRequireDefault(require("./modules/sales/typeorm/entities/Sales"));

var _User = require("./modules/users/typeorm/entities/User");

var _UserToken = require("./modules/users/typeorm/entities/UserToken");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AppDataSource = new _typeorm.DataSource({
  name: 'default',
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'postgres',
  schema: 'ogea',
  synchronize: true,
  logging: false,
  entities: [_User.User, _Category.default, _Incoming.default, _Sales.default, _Inventory.default, _PaymentMethod.default, _Product.default, _Inventory.default, _UserToken.UserToken],
  migrations: [],
  subscribers: []
});
exports.AppDataSource = AppDataSource;
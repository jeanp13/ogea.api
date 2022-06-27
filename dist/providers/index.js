"use strict";

var _tsyringe = require("tsyringe");

var _UsersRepository = _interopRequireDefault(require("../modules/users/typeorm/repositories/UsersRepository"));

var _UserTokenRepository = _interopRequireDefault(require("../modules/users/typeorm/repositories/UserTokenRepository"));

var _BCryptHashProvider = _interopRequireDefault(require("./HashProvider/implementations/BCryptHashProvider"));

var _ProductsRepository = _interopRequireDefault(require("../modules/products/typeorm/repositories/ProductsRepository"));

var _CategoryRepository = _interopRequireDefault(require("../modules/categories/typeorm/repositories/CategoryRepository"));

require("./StorageProvider");

require("./MailTemplateProvider");

require("./MailProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_tsyringe.container.registerSingleton('HashProvider', _BCryptHashProvider.default);

_tsyringe.container.registerSingleton('HashProvider', _BCryptHashProvider.default);

_tsyringe.container.registerSingleton('UsersRepository', _UsersRepository.default);

_tsyringe.container.registerSingleton('UserTokensRepository', _UserTokenRepository.default);

_tsyringe.container.registerSingleton('CategoriesRepository', _CategoryRepository.default);

_tsyringe.container.registerSingleton('ProductsRepository', _ProductsRepository.default);
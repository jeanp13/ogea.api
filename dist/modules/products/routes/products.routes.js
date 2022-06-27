"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var multer = _interopRequireWildcard(require("multer"));

var _celebrate = require("celebrate");

var _upload = _interopRequireDefault(require("../../../configuration/upload"));

var _ProductsController = _interopRequireDefault(require("../controller/ProductsController"));

var _auth = _interopRequireDefault(require("../../../middleware/auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const productsRouter = (0, _express.Router)();
const upload = multer(_upload.default.multer);
const productsController = new _ProductsController.default();
productsRouter.use(_auth.default);
productsRouter.get('/', productsController.show);
productsRouter.get('/:id', productsController.find);
productsRouter.get('/:category_id', productsController.showByCategory);
productsRouter.patch('/', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    category_id: _celebrate.Joi.string().required(),
    amount: _celebrate.Joi.number().required(),
    description: _celebrate.Joi.string().required(),
    price: _celebrate.Joi.number().required(),
    code: _celebrate.Joi.number().required(),
    title: _celebrate.Joi.string().required()
  }
}), upload.single('photo'), productsController.create);
productsRouter.patch('/:product_id', upload.single('photo'), productsController.update);
productsRouter.post('/:product_id', productsController.update);
var _default = productsRouter;
exports.default = _default;
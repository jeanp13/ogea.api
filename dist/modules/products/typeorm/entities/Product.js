"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classTransformer = require("class-transformer");

var _typeorm = require("typeorm");

var _User = require("../../../users/typeorm/entities/User");

var _upload = _interopRequireDefault(require("../../../../configuration/upload"));

var _Category = _interopRequireDefault(require("../../../categories/typeorm/entities/Category"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

let Product = (_dec = (0, _typeorm.Entity)('products'), _dec2 = (0, _typeorm.PrimaryGeneratedColumn)('uuid'), _dec3 = Reflect.metadata("design:type", String), _dec4 = (0, _typeorm.Column)(), _dec5 = Reflect.metadata("design:type", Number), _dec6 = (0, _typeorm.Column)(), _dec7 = Reflect.metadata("design:type", String), _dec8 = (0, _typeorm.Column)(), _dec9 = Reflect.metadata("design:type", String), _dec10 = (0, _typeorm.CreateDateColumn)(), _dec11 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec12 = (0, _typeorm.UpdateDateColumn)(), _dec13 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec14 = (0, _typeorm.Column)(), _dec15 = Reflect.metadata("design:type", Number), _dec16 = (0, _typeorm.Column)(), _dec17 = Reflect.metadata("design:type", Number), _dec18 = (0, _typeorm.Column)(), _dec19 = (0, _classTransformer.Exclude)(), _dec20 = Reflect.metadata("design:type", String), _dec21 = (0, _typeorm.Column)(), _dec22 = (0, _classTransformer.Exclude)(), _dec23 = Reflect.metadata("design:type", String), _dec24 = (0, _typeorm.ManyToOne)(() => _User.User), _dec25 = (0, _typeorm.JoinColumn)({
  name: 'user_id'
}), _dec26 = Reflect.metadata("design:type", typeof _User.User === "undefined" ? Object : _User.User), _dec27 = (0, _typeorm.Column)(), _dec28 = Reflect.metadata("design:type", String), _dec29 = (0, _typeorm.ManyToOne)(() => _Category.default, {
  cascade: true
}), _dec30 = (0, _typeorm.JoinColumn)({
  name: 'category_id'
}), _dec31 = Reflect.metadata("design:type", typeof _Category.default === "undefined" ? Object : _Category.default), _dec32 = (0, _classTransformer.Expose)({
  name: 'photo'
}), _dec33 = Reflect.metadata("design:type", Function), _dec34 = Reflect.metadata("design:paramtypes", []), _dec(_class = (_class2 = class Product {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "code", _descriptor2, this);

    _initializerDefineProperty(this, "title", _descriptor3, this);

    _initializerDefineProperty(this, "description", _descriptor4, this);

    _initializerDefineProperty(this, "created_at", _descriptor5, this);

    _initializerDefineProperty(this, "updated_at", _descriptor6, this);

    _initializerDefineProperty(this, "price", _descriptor7, this);

    _initializerDefineProperty(this, "amount", _descriptor8, this);

    _initializerDefineProperty(this, "photo_url", _descriptor9, this);

    _initializerDefineProperty(this, "user_id", _descriptor10, this);

    _initializerDefineProperty(this, "user", _descriptor11, this);

    _initializerDefineProperty(this, "category_id", _descriptor12, this);

    _initializerDefineProperty(this, "category", _descriptor13, this);
  }

  getPhoto() {
    if (!this.photo_url) {
      return null;
    }

    switch (_upload.default.driver) {
      case 'disk':
        return `${process.env.APP_API_URL}/files/${this.photo_url}`;

      case 's3':
        return `https://${_upload.default.config.aws.bucket}.s3.amazonaws.com/${this.photo_url}`;

      default:
        return null;
    }
  }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "code", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "description", [_dec8, _dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "created_at", [_dec10, _dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "updated_at", [_dec12, _dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "price", [_dec14, _dec15], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "amount", [_dec16, _dec17], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "photo_url", [_dec18, _dec19, _dec20], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "user_id", [_dec21, _dec22, _dec23], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "user", [_dec24, _dec25, _dec26], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "category_id", [_dec27, _dec28], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "category", [_dec29, _dec30, _dec31], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class2.prototype, "getPhoto", [_dec32, _dec33, _dec34], Object.getOwnPropertyDescriptor(_class2.prototype, "getPhoto"), _class2.prototype)), _class2)) || _class);
var _default = Product;
exports.default = _default;
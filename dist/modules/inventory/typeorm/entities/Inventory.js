"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _PaymentMethod = _interopRequireDefault(require("../../../payments_method/typeorm/entities/PaymentMethod"));

var _Product = _interopRequireDefault(require("../../../products/typeorm/entities/Product"));

var _User = require("../../../users/typeorm/entities/User");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

let Inventory = (_dec = (0, _typeorm.Entity)('inventory'), _dec2 = (0, _typeorm.PrimaryGeneratedColumn)('uuid'), _dec3 = Reflect.metadata("design:type", String), _dec4 = (0, _typeorm.Column)(), _dec5 = Reflect.metadata("design:type", String), _dec6 = (0, _typeorm.Column)(), _dec7 = Reflect.metadata("design:type", String), _dec8 = (0, _typeorm.Column)(), _dec9 = Reflect.metadata("design:type", Number), _dec10 = (0, _typeorm.Column)(), _dec11 = Reflect.metadata("design:type", Number), _dec12 = (0, _typeorm.Column)(), _dec13 = Reflect.metadata("design:type", Number), _dec14 = (0, _typeorm.Column)(), _dec15 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec16 = (0, _typeorm.Column)(), _dec17 = Reflect.metadata("design:type", String), _dec18 = (0, _typeorm.ManyToOne)(() => _User.User), _dec19 = (0, _typeorm.JoinColumn)({
  name: 'user_id'
}), _dec20 = Reflect.metadata("design:type", typeof _User.User === "undefined" ? Object : _User.User), _dec21 = (0, _typeorm.Column)(), _dec22 = Reflect.metadata("design:type", String), _dec23 = (0, _typeorm.ManyToOne)(() => _Product.default), _dec24 = (0, _typeorm.JoinColumn)({
  name: 'product_id'
}), _dec25 = Reflect.metadata("design:type", typeof _Product.default === "undefined" ? Object : _Product.default), _dec26 = (0, _typeorm.Column)(), _dec27 = Reflect.metadata("design:type", String), _dec28 = (0, _typeorm.ManyToOne)(() => _PaymentMethod.default), _dec29 = (0, _typeorm.JoinColumn)({
  name: 'payment_method_id'
}), _dec30 = Reflect.metadata("design:type", typeof _PaymentMethod.default === "undefined" ? Object : _PaymentMethod.default), _dec31 = (0, _typeorm.CreateDateColumn)(), _dec32 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec33 = (0, _typeorm.UpdateDateColumn)(), _dec34 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec(_class = (_class2 = class Inventory {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "client_name", _descriptor2, this);

    _initializerDefineProperty(this, "client_address", _descriptor3, this);

    _initializerDefineProperty(this, "price", _descriptor4, this);

    _initializerDefineProperty(this, "amount", _descriptor5, this);

    _initializerDefineProperty(this, "discount", _descriptor6, this);

    _initializerDefineProperty(this, "purchase_date", _descriptor7, this);

    _initializerDefineProperty(this, "user_id", _descriptor8, this);

    _initializerDefineProperty(this, "user", _descriptor9, this);

    _initializerDefineProperty(this, "product_id", _descriptor10, this);

    _initializerDefineProperty(this, "product", _descriptor11, this);

    _initializerDefineProperty(this, "payment_method_id", _descriptor12, this);

    _initializerDefineProperty(this, "payment_method", _descriptor13, this);

    _initializerDefineProperty(this, "created_at", _descriptor14, this);

    _initializerDefineProperty(this, "updated_at", _descriptor15, this);
  }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "client_name", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "client_address", [_dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "price", [_dec8, _dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "amount", [_dec10, _dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "discount", [_dec12, _dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "purchase_date", [_dec14, _dec15], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "user_id", [_dec16, _dec17], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "user", [_dec18, _dec19, _dec20], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "product_id", [_dec21, _dec22], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "product", [_dec23, _dec24, _dec25], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "payment_method_id", [_dec26, _dec27], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "payment_method", [_dec28, _dec29, _dec30], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "created_at", [_dec31, _dec32], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "updated_at", [_dec33, _dec34], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
var _default = Inventory;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseEntity = void 0;

var _typeorm = require("typeorm");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

let BaseEntity = (_dec = (0, _typeorm.PrimaryGeneratedColumn)('uuid'), _dec2 = Reflect.metadata("design:type", String), _dec3 = (0, _typeorm.CreateDateColumn)({
  type: 'timestamp'
}), _dec4 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec5 = (0, _typeorm.UpdateDateColumn)({
  type: 'timestamp',
  nullable: true
}), _dec6 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec7 = (0, _typeorm.Column)({
  type: 'timestamp',
  nullable: true
}), _dec8 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec9 = (0, _typeorm.Column)({
  default: false
}), _dec10 = Reflect.metadata("design:type", Boolean), (_class = class BaseEntity {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "created_at", _descriptor2, this);

    _initializerDefineProperty(this, "updated_at", _descriptor3, this);

    _initializerDefineProperty(this, "deleted_at", _descriptor4, this);

    _initializerDefineProperty(this, "deleted", _descriptor5, this);
  }

}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "id", [_dec, _dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "created_at", [_dec3, _dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "updated_at", [_dec5, _dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "deleted_at", [_dec7, _dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "deleted", [_dec9, _dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class));
exports.BaseEntity = BaseEntity;
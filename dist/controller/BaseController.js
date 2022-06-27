"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseController = void 0;

var _dataSource = require("../data-source");

var _BaseNotification = require("../entities/BaseNotification");

class BaseController extends _BaseNotification.BaseNotification {
  constructor(entityName) {
    super();
    this._repository = void 0;
    this._repository = _dataSource.AppDataSource.getRepository(entityName);
  }

  async all(model) {
    return this._repository.find();
  }

  async one(model) {
    return this._repository.findOne(model.id);
  }

  async save(model) {
    if (model.id) {
      const modelInDb = await this.one(model);

      if (modelInDb) {
        Object.assign(modelInDb, model);
      }
    }

    if (this.valid()) return this._repository.save(model);
    return {
      status: 400,
      errors: this.allNotifications
    };
  }

  async remove(model) {
    const modelInDb = await this._repository.findOneBy(model.id);

    if (modelInDb) {
      model.deleted = true;
      model.deleted_at = new Date();
    }

    return this._repository.save(model); // await this._repository.remove(userToRemove);
  }

  get repository() {
    return this._repository;
  }

}

exports.BaseController = BaseController;
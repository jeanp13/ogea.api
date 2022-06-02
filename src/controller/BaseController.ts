import { Request, Response, NextFunction } from "express";
import { getRepository, Repository } from "typeorm";
import { BaseNotification } from "../entities/BaseNotification";

export abstract class BaseController<T> extends BaseNotification {
  private _repository: Repository<T>;

  constructor(entityName: any) {
    super();
    this._repository = getRepository<T>(entityName);
  }

  async all(model: any) {
    return this._repository.find();
  }

  async one(model: any) {
    return this._repository.findOne(model.id);
  }

  async save(model: any) {
    if (model.id) {
      let modelInDb = await this.one(model);
      if (modelInDb) {
        Object.assign(modelInDb, model);
      }
    }
    if (this.valid()) return this._repository.save(model);
    else
      return {
        status: 400,
        errors: this.allNotifications,
      };
  }

  async remove(model: any) {
    let modelInDb = await this._repository.findOneBy(model.id);
    if (modelInDb) {
      model.deleted = true;
      model.deleted_at = new Date();
    }
    return this._repository.save(model);
    // await this._repository.remove(userToRemove);
  }
}
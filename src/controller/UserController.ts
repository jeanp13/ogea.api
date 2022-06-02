import { Request } from "express";
import { User } from "../entities/User";
import { BaseController } from "./BaseController";

export class UserController extends BaseController<User> {
  constructor() {
    super(User);
  }

  async save(request: Request): Promise<any> {
    let _user = <User>request.body;
    super.isRequired(_user.name, "O nome do usuário é obigatorio.");
    super.isRequired(_user.email, "O email do usuário é obrigatorio.");
    super.isRequired(_user.password, "A senha do usuário é obrigatória.");
    // super.isRequired(_user.avatar, '');
    return super.save(_user);
  }
}

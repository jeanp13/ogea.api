import { Request, Response } from "express";
import { container } from "tsyringe";
import { classToClass } from "class-transformer";

import CreateUserService from "../services/CreateUserService";
import ShowProfileService from "../services/ShowProfileService";
import UpdateProfileService from "../services/UpdateProfileService";

export class UserController {
  async createUser(request: Request, response: Response): Promise<Response> {
    const { name, email, password, avatar, storeId } = request.body;
    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      email,
      password,
      avatar,
      storeId,
    });

    return response.json({ user: classToClass(user) });
  }

  public async show(request: Request, response: Response): Promise<Response> {
    try {
      const user_id = request.user.id;

      const showProfile = container.resolve(ShowProfileService);

      const user = await showProfile.execute({
        user_id,
      });

      return response.json({ user: classToClass(user) });
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  public async showAll(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      // const user_id = request.user.id;

      const showProfile = container.resolve(ShowProfileService);

      const user = await showProfile.findAll();

      return response.json({ user: classToClass(user) });
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const user_id = request.user.id;
      const { name, email, old_password, password } = request.body;
      const updateProfile = container.resolve(UpdateProfileService);

      const user = await updateProfile.execute({
        user_id,
        name,
        email,
        old_password,
        password,
      });

      return response.json({ user: classToClass(user) });
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }
}

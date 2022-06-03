import { Repository } from "typeorm";
import { inject, injectable } from "tsyringe";
import { v4 as uuid } from "uuid";

import { AppDataSource } from "../../../data-source";
import AppError from "../../../errors/AppError";
import IHashProvider from "../models/IHashProvider";
import { User } from "../typeorm/entities/User";

@injectable()
class CreateUserService {
  private _repository: Repository<User>;

  constructor(
    @inject("HashProvider")
    private hashProvider: IHashProvider
  ) {
    this._repository = AppDataSource.getRepository<User>(User);
  }

  public async execute({
    name,
    email,
    password,
    avatar,
    storeId,
  }: ICreateUser): Promise<User> {
    const userRepository = await this._repository.findOne({
      where: { email },
    });

    if (userRepository) throw new AppError("Email address already used");

    if (!storeId) {
      storeId = uuid();
    }
    const hashedPassword = await this.hashProvider.generateHash(password);

    const user = this._repository.create({
      name,
      email,
      password: hashedPassword,
      avatar,
      storeId,
    });

    const savedUser = await this._repository.save(user);

    return savedUser;
  }
}

export default CreateUserService;

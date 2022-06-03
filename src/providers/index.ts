import { container } from "tsyringe";
import IUsersRepository from "../modules/users/repositories/IUsersRepository";
import IUserTokensRepository from "../modules/users/repositories/IUserTokensRepository";
import UsersRepository from "../modules/users/typeorm/repositories/UsersRepository";
import UserTokenRepository from "../modules/users/typeorm/repositories/UserTokenRepository";
import BCryptHashProvider from "./HashProvider/implementations/BCryptHashProvider";
import IHashProvider from "./HashProvider/models/IHashProvider";

container.registerSingleton<IHashProvider>("HashProvider", BCryptHashProvider);
container.registerSingleton<IHashProvider>("HashProvider", BCryptHashProvider);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
container.registerSingleton<IUserTokensRepository>(
  "UserTokensRepository",
  UserTokenRepository
);

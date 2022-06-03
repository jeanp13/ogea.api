import { inject, injectable } from "tsyringe";
import AppError from "../../../errors/AppError";
import IUsersRepository from "../repositories/IUsersRepository";
import { User } from "../typeorm/entities/User";

interface IRequest {
  user_id: string;
}
@injectable()
class ShowProfileService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  public async execute({ user_id }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("User not found");
    }

    return user;
  }

  public async findAll(): Promise<User[]> {
    const user = await this.usersRepository.findAll();

    if (!user) {
      throw new AppError("User not found");
    }

    return user;
  }
}

export default ShowProfileService;

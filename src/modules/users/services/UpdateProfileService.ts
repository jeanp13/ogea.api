import { inject, injectable } from 'tsyringe';
import AppError from '../../../errors/AppError';
import IHashProvider from '../models/IHashProvider';
import IUsersRepository from '../repositories/IUsersRepository';
import { User } from '../typeorm/entities/User';

interface IRequest {
  user_id: string;
  name: string;
  email: string;
  old_password?: string;
  password?: string;
}
@injectable()
class UpdateProfileService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({
    user_id,
    name,
    email,
    old_password,
    password,
  }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found');
    }
    const userExists = await this.usersRepository.findByEmail(email);

    if (userExists && userExists.id !== user.id) {
      throw new AppError('Email already in use');
    }

    if (password && !old_password) {
      throw new AppError(
        'You need to inform the old password to set a new password',
      );
    }
    if (password && old_password) {
      const checkOldPassword = await this.hashProvider.compareHash(
        old_password,
        user.password,
      );
      if (!checkOldPassword)
        throw new AppError('The old password it is not correct');
    }

    user.name = name;
    user.email = email;

    if (password) {
      user.password = await this.hashProvider.generateHash(password);
    }

    return this.usersRepository.save(user);
  }
}

export default UpdateProfileService;

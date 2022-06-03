import { Repository } from "typeorm";
import { AppDataSource } from "../../../../data-source";
import { UserToken } from "../../../../entities/UserToken";
import IUserTokensRepository from "../../repositories/IUserTokensRepository";

class UserTokenRepository implements IUserTokensRepository {
  private ormRepository: Repository<UserToken>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository<UserToken>(UserToken);
  }

  public async findByToken(token: string): Promise<UserToken | undefined> {
    const userToken = await this.ormRepository.findOne({
      where: { token },
    });
    return userToken;
  }

  public async generate(user_id: string): Promise<UserToken> {
    const userToken = this.ormRepository.create({
      user_id,
    });
    await this.ormRepository.save(userToken);

    return userToken;
  }

  get tokenRepository(): Repository<UserToken> {
    return this.ormRepository;
  }
}

export default UserTokenRepository;

import ICreateUserDTO from "../dtos/ICreateUserDTO";
import { User } from "../typeorm/entities/User";

export default interface IUsersRepository {
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  findAll(): Promise<User[]>;
  create(date: ICreateUserDTO): Promise<User>;
  save(user: User): Promise<User>;
}

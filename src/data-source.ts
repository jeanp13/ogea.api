import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./modules/users/typeorm/entities/User";

export const AppDataSource = new DataSource({
  name: "default",
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "ogea",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});

import 'reflect-metadata';
import { DataSource } from 'typeorm';
import Category from './modules/categories/typeorm/entities/Category';
import Incoming from './modules/incoming/typeorm/entities/Incoming';
import Inventory from './modules/inventory/typeorm/entities/Inventory';
import PaymentMethod from './modules/payments_method/typeorm/entities/PaymentMethod';
import Product from './modules/products/typeorm/entities/Product';
import Sales from './modules/sales/typeorm/entities/Sales';
import { User } from './modules/users/typeorm/entities/User';
import { UserToken } from './modules/users/typeorm/entities/UserToken';

export const AppDataSource = new DataSource({
  name: 'default',
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'postgres',
  schema: 'ogea',
  synchronize: true,
  logging: false,
  entities: [
    User,
    Category,
    Incoming,
    Sales,
    Inventory,
    PaymentMethod,
    Product,
    Inventory,
    UserToken,
  ],
  migrations: [],
  subscribers: [],
});

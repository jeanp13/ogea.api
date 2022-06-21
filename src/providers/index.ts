import { container } from 'tsyringe';
import IUsersRepository from '../modules/users/repositories/IUsersRepository';
import IUserTokensRepository from '../modules/users/repositories/IUserTokensRepository';
import UsersRepository from '../modules/users/typeorm/repositories/UsersRepository';
import UserTokenRepository from '../modules/users/typeorm/repositories/UserTokenRepository';
import BCryptHashProvider from './HashProvider/implementations/BCryptHashProvider';
import IHashProvider from './HashProvider/models/IHashProvider';
import ICategoryRepository from '../modules/categories/repositories/ICategoryRepository';
import IProductsRepository from '../modules/products/repositories/IProductsRepository';
import ProductsRepository from '../modules/products/typeorm/repositories/ProductsRepository';
import CategoriesRepository from '../modules/categories/typeorm/repositories/CategoryRepository';

import './StorageProvider';
import './MailTemplateProvider';
import './MailProvider';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokenRepository,
);

container.registerSingleton<ICategoryRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository,
);

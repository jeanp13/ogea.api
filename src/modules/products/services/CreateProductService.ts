import { inject, injectable } from 'tsyringe';
import AppError from '../../../errors/AppError';
import IStorageProvider from '../../../providers/StorageProvider/models/IStorageProvider';
import IProductsRepository from '../repositories/IProductsRepository';
import Product from '../typeorm/entities/Product';

interface IRequest {
  description: string;
  photo_url?: string;
  price: number;
  title: string;
  category_id: string;
  user_id: string;
  amount: number;
  code: number;
}
@injectable()
class CreateProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({
    description,
    photo_url,
    price,
    title,
    category_id,
    user_id,
    amount,
    code,
  }: IRequest): Promise<Product> {
    const checkUserExists = await this.productsRepository.findByDescription(
      description,
    );
    if (checkUserExists) {
      throw new AppError('Producto já cadastrado.');
    }
    const fileName = await this.storageProvider.saveFile(photo_url);

    const product = await this.productsRepository.create({
      description,
      amount,
      category_id,
      price,
      title,
      user_id,
      code,
      photo_url: fileName,
    });

    return product;
  }
}

export default CreateProductService;

import { inject, injectable } from 'tsyringe';
import AppError from '../../../errors/AppError';
import IProductsRepository from '../repositories/IProductsRepository';
import Product from '../typeorm/entities/Product';

interface IRequest {
  category_id: string;
}

@injectable()
class ShowProductsCategoryService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute({ category_id }: IRequest): Promise<Product[]> {
    const products = await this.productsRepository.findByCategory(category_id);

    if (!products) {
      throw new AppError('Nenhum Produto Encontrado.');
    }

    return products;
  }
}

export default ShowProductsCategoryService;

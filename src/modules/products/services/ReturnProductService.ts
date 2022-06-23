import { inject, injectable } from 'tsyringe';
import AppError from '../../../errors/AppError';
import IProductsRepository from '../repositories/IProductsRepository';
import Product from '../typeorm/entities/Product';

interface IRequest {
  id: string;
}

@injectable()
class ReturnProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<Product> {
    const product = await this.productsRepository.findById(id);

    if (!product) {
      throw new AppError('Nenhum Produto Encontrado');
    }

    return product;
  }
}

export default ReturnProductService;

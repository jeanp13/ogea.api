import { Repository } from 'typeorm';
import { AppDataSource } from '../../../../data-source';
import ICreateProductDTO from '../../dtos/ICreateProductDTO';
import IProductsRepository from '../../repositories/IProductsRepository';
import Product from '../entities/Product';

class ProductsRepository implements IProductsRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Product);
  }

  public async create({
    description,
    photo_url,
    price,
    title,
    category_id,
    user_id,
    amount,
    code,
  }: ICreateProductDTO): Promise<Product> {
    const product = this.ormRepository.create({
      description,
      amount,
      photo_url,
      price,
      title,
      category_id,
      user_id,
      code,
    });

    await this.ormRepository.save(product);

    return product;
  }

  public async findById(product_id: string): Promise<Product | undefined> {
    const product = await this.ormRepository.findOne({
      where: { id: product_id },
    });
    // const product = await this.ormRepository.findOne(product_id, {
    //   relations: ["category"],
    // });

    return product;
  }

  public async findByDescription(
    description: string,
  ): Promise<Product | undefined> {
    const product = await this.ormRepository.findOne({
      where: { description },
      relations: ['category'],
    });

    return product;
  }

  public async findByCategory(
    category_id: string,
  ): Promise<Product[] | undefined> {
    const products = await this.ormRepository.find({
      where: { category_id },
      relations: ['category'],
    });

    return products;
  }

  public async listAll(): Promise<Product[] | undefined> {
    const products = await this.ormRepository.find({
      relations: ['category', 'user'],
    });

    return products;
  }

  public async save(product: Product): Promise<Product> {
    await this.ormRepository.save(product);
    return product;
  }
}

export default ProductsRepository;

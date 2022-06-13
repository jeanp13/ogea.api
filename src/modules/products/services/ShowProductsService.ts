import { inject, injectable } from "tsyringe";
import AppError from "../../../errors/AppError";
import IProductsRepository from "../repositories/IProductsRepository";
import Product from "../typeorm/entities/Product";

@injectable()
class ShowProductsService {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository
  ) {}

  public async execute(): Promise<Product[]> {
    const products = await this.productsRepository.listAll();

    if (!products) {
      throw new AppError("Nenhum Produto Encontrado");
    }

    return products;
  }
}

export default ShowProductsService;

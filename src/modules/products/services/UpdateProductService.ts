import { inject, injectable } from "tsyringe";
import AppError from "../../../errors/AppError";
import IStorageProvider from "../../../providers/StorageProvider/models/IStorageProvider";
import IProductsRepository from "../repositories/IProductsRepository";
import Product from "../typeorm/entities/Product";

interface IRequest {
  product_id: string;
  description: string;
  photo_url: string | null;
  price: number;
  title: string;
  category_id: string;
  user_id: string;
  amount: number;
  code: number;
}
@injectable()
class UpdateProductService {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository,

    @inject("StorageProvider")
    private storageProvider: IStorageProvider
  ) {}

  public async execute({
    product_id,
    description,
    photo_url,
    price,
    title,
    category_id,
    user_id,
    amount,
    code,
  }: IRequest): Promise<Product> {
    const product = await this.productsRepository.findById(product_id);
    if (!product) {
      throw new AppError("Produto não localizado.");
    }
    let fileName = product.photo_url;
    if (photo_url) {
      await this.storageProvider.deleteFile(photo_url);
      fileName = await this.storageProvider.saveFile(photo_url);
    }

    product.id = product_id;
    product.description = description;
    product.amount = amount;
    product.category_id = category_id;
    product.photo_url = fileName;
    product.price = price;
    product.title = title;
    product.code = code;

    const productUpdated = await this.productsRepository.save(product);

    return productUpdated;
  }
}

export default UpdateProductService;

import { inject, injectable } from "tsyringe";
import AppError from "../../../errors/AppError";
import IStorageProvider from "../../../providers/StorageProvider/models/IStorageProvider";
import IProductsRepository from "../repositories/IProductsRepository";
import Product from "../typeorm/entities/Product";

interface IRequest {
  product_id: string;
  photoFileName: string;
}
@injectable()
class UpdateProductPhotoService {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository,

    @inject("StorageProvider")
    private storageProvider: IStorageProvider
  ) {}

  public async execute({
    product_id,
    photoFileName,
  }: IRequest): Promise<Product> {
    const product = await this.productsRepository.findById(product_id);
    if (!product) {
      throw new AppError("Produto não localizado");
    }

    if (product.photo_url) {
      await this.storageProvider.deleteFile(product.photo_url);
    }

    const fileName = await this.storageProvider.saveFile(photoFileName);

    product.photo_url = fileName;

    await this.productsRepository.save(product);

    return product;
  }
}

export default UpdateProductPhotoService;

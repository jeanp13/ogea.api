import ICreateProductDTO from "../dtos/ICreateProductDTO";
import Product from "../typeorm/entities/Product";

export default interface IProductsRepositoy {
  create(data: ICreateProductDTO): Promise<Product>;
  findById(product_id: string): Promise<Product | undefined>;
  findByCategory(category_id: string): Promise<Product[] | undefined>;
  save(product: Product): Promise<Product>;
  findByDescription(description: string): Promise<Product | undefined>;
  listAll(): Promise<Product[] | undefined>;
}

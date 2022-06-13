import ICreateCategoryDTO from "../dtos/ICreateCategoryDTO";
import Category from "../typeorm/entities/Category";

export default interface ICategoryRepositoy {
  create(data: ICreateCategoryDTO): Promise<Category>;
  findById(category_id: string): Promise<Category | undefined>;
  save(category: Category): Promise<Category>;
  findByTitle(title: string): Promise<Category | undefined>;
  listAll(): Promise<Category[] | undefined>;
}

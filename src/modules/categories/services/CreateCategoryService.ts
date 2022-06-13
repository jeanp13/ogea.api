import { inject, injectable } from "tsyringe";
import AppError from "../../../errors/AppError";
import ICategoryRepository from "../repositories/ICategoryRepository";
import Category from "../typeorm/entities/Category";

interface IRequest {
  title: string;
}
@injectable()
class CreateCategoryService {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoryRepository
  ) {}

  public async execute({ title }: IRequest): Promise<Category> {
    const checkUserExists = await this.categoriesRepository.findByTitle(title);
    if (checkUserExists) {
      throw new AppError("Esta Categoria já existe.");
    }

    const product = await this.categoriesRepository.create({
      title,
    });

    return product;
  }
}

export default CreateCategoryService;

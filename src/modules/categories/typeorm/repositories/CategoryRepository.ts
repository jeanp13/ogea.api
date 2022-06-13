import { Repository } from "typeorm";
import { AppDataSource } from "../../../../data-source";
import ICreateCategoryDTO from "../../dtos/ICreateCategoryDTO";
import ICategoryRepository from "../../repositories/ICategoryRepository";
import Category from "../entities/Category";

class CategoryRepository implements ICategoryRepository {
  private ormRepository: Repository<Category>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Category);
  }

  public async create({ title }: ICreateCategoryDTO): Promise<Category> {
    const category = this.ormRepository.create({
      title,
    });

    await this.ormRepository.save(category);

    return category;
  }

  public async findById(category_id: string): Promise<Category | undefined> {
    const category = await this.ormRepository.findOne({
      where: { id: category_id },
    });

    return category;
  }

  public async findByTitle(title: string): Promise<Category | undefined> {
    const category = await this.ormRepository.findOne({
      where: { title },
    });

    return category;
  }

  public async listAll(): Promise<Category[] | undefined> {
    const categories = await this.ormRepository.find({
      relations: ["products"],
    });

    return categories;
  }

  public async save(category: Category): Promise<Category> {
    await this.ormRepository.save(category);
    return category;
  }
}

export default CategoryRepository;

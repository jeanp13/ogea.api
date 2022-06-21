import { inject, injectable } from 'tsyringe';
import AppError from '../../../errors/AppError';
import ICategoryRepository from '../repositories/ICategoryRepository';
import Category from '../typeorm/entities/Category';

@injectable()
class ShowCategoriesService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoryRepository,
  ) {}

  public async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.listAll();

    if (!categories) {
      throw new AppError('Nenhuma Categoria Encontrada.');
    }

    return categories;
  }
}

export default ShowCategoriesService;

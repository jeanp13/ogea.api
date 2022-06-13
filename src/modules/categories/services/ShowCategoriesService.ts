import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import Category from '@modules/categories/infra/typeorm/entities/Category';
import ICategoryRepository from '../repositories/ICategoryRepository';

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

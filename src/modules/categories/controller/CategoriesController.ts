import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { instanceToPlain } from 'class-transformer';
import CreateCategoryService from '../services/CreateCategoryService';
import ShowCategoriesService from '../services/ShowCategoriesService';

export default class CategoriesController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { title } = request.body;
      const createCategory = container.resolve(CreateCategoryService);

      const category = await createCategory.execute({
        title,
      });

      return response.json({ category: instanceToPlain(category) });
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  public async show(request: Request, response: Response): Promise<Response> {
    try {
      const showCategories = container.resolve(ShowCategoriesService);

      const categories = await showCategories.execute();
      // Object.assign
      return response.json({ categories: instanceToPlain(categories) });
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }
}

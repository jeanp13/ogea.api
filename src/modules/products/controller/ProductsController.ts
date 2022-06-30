import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { instanceToPlain } from 'class-transformer';
import CreateProductService from '../services/CreateProductService';
import ReturnProductService from '../services/ReturnProductService';
import ShowProductsCategoryService from '../services/ShowProductsCategoryService';
import ShowProductsService from '../services/ShowProductsService';
import UpdateProductService from '../services/UpdateProductService';

export default class ProductsController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { amount, category_id, description, price, title, code } =
        request.body;
      const user_id = request.user.id;
      const createProduct = container.resolve(CreateProductService);

      const user = await createProduct.execute({
        amount,
        category_id,
        description,
        price,
        title,
        user_id,
        photo_url: '',
        code,
      });

      return response.json({ user: instanceToPlain(user) });
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const { amount, category_id, description, price, title, code } =
        request.body;
      // console.log(request.file.filename);
      let photo_url = null;
      if (request.file) photo_url = request.file.filename;
      console.log(photo_url);
      const { product_id } = request.params;
      // console.log(product_id);

      const user_id = request.user.id;
      const updateProduct = container.resolve(UpdateProductService);

      const product = await updateProduct.execute({
        product_id,
        amount,
        category_id,
        description,
        price,
        title,
        user_id,
        photo_url,
        code,
      });

      return response.json({ product: instanceToPlain(product) });
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  public async show(request: Request, response: Response): Promise<Response> {
    try {
      const showProducts = container.resolve(ShowProductsService);

      const products = await showProducts.execute();

      return response.json({ products: instanceToPlain(products) });
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  public async find(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const showProducts = container.resolve(ReturnProductService);

      const product = await showProducts.execute({ id });

      return response.json({ product: instanceToPlain(product) });
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  public async showByCategory(
    request: Request,
    response: Response,
  ): Promise<Response> {
    try {
      const { category_id } = request.params;
      const showProductsCategory = container.resolve(
        ShowProductsCategoryService,
      );

      const products = await showProductsCategory.execute({ category_id });

      return response.json({ products: instanceToPlain(products) });
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }
}

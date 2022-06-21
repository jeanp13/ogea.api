import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import ensureAuthenticated from '../../../middleware/auth';
import CategoriesController from '../controller/CategoriesController';

const categoriesRoutes = Router();
const categoriesController = new CategoriesController();

categoriesRoutes.use(ensureAuthenticated);

categoriesRoutes.get('/', categoriesController.show);

categoriesRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      title: Joi.string().required(),
    },
  }),
  categoriesController.create,
);

export default categoriesRoutes;

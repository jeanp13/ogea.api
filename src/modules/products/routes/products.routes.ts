import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
// import * as multer from 'multer';
// import multer from 'multer';
import multer = require('multer');
import uploadConfig from '../../../configuration/upload';
import ProductsController from '../controller/ProductsController';
import ensureAuthenticated from '../../../middleware/auth';

const productsRouter = Router();
const upload = multer(uploadConfig.multer);
const productsController = new ProductsController();

productsRouter.use(ensureAuthenticated);

productsRouter.get('/', productsController.show);
productsRouter.get('/:id', productsController.find);

productsRouter.get('/:category_id', productsController.showByCategory);

productsRouter.patch(
  '/',
  celebrate({
    [Segments.BODY]: {
      category_id: Joi.string().required(),
      amount: Joi.number().required(),
      description: Joi.string().required(),
      price: Joi.number().required(),
      code: Joi.number().required(),
      title: Joi.string().required(),
    },
  }),
  upload.single('photo'),
  productsController.create,
);

productsRouter.patch(
  '/:product_id',
  upload.single('photo'),
  productsController.update,
);
productsRouter.post('/:product_id', productsController.update);

export default productsRouter;

import { Router } from 'express';
import auth from '../../../middleware/auth';
import { UserController } from '../controller/UserController';

const usersRouter = Router();
const usersController = new UserController();

usersRouter.post('/', usersController.createUser);
usersRouter.get('/', usersController.showAll);
usersRouter.get('/:id', usersController.show);

usersRouter.use(auth);

// usersRouter.post("/", usersController.save);
// usersRouter.delete("/:id", usersController.remove);

export default usersRouter;

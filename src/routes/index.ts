import { Router } from "express";
import usersRouter from "../modules/users/routes/user.routes";
import sessionsRouter from "../modules/users/routes/sessions.routes";
import productsRouter from "../modules/products/routes/products.routes";
import categoriesRouter from "../modules/categories/routes/category.routes";

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/sessions", sessionsRouter);
routes.use("/products", productsRouter);
routes.use("/categories", categoriesRouter);

export default routes;

// import { UserController } from "../controller/UserController";
// export const Routes = [
//   { method: "get", route: "/users", controller: UserController, action: "all" },
//   {
//     method: "get",
//     route: "/users/:id",
//     controller: UserController,
//     action: "one",
//   },
//   {
//     method: "post",
//     route: "/users",
//     controller: UserController,
//     action: "createUser",
//   },
//   {
//     method: "post",
//     route: "/users/:id",
//     controller: UserController,
//     action: "save",
//   },
//   {
//     method: "delete",
//     route: "/users/:id",
//     controller: UserController,
//     action: "remove",
//   },
// ];

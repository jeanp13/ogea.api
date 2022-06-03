import { Router } from "express";
import usersRouter from "../modules/users/routes/user.routes";

const routes = Router();

routes.use("/users", usersRouter);

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

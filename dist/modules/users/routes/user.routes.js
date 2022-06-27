"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _auth = _interopRequireDefault(require("../../../middleware/auth"));

var _UserController = require("../controller/UserController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const usersRouter = (0, _express.Router)();
const usersController = new _UserController.UserController();
usersRouter.post('/', usersController.createUser);
usersRouter.get('/', usersController.showAll);
usersRouter.get('/:id', usersController.show);
usersRouter.use(_auth.default); // usersRouter.post("/", usersController.save);
// usersRouter.delete("/:id", usersController.remove);

var _default = usersRouter;
exports.default = _default;
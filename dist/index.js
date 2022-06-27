"use strict";

var express = _interopRequireWildcard(require("express"));

require("express-async-errors");

var cors = _interopRequireWildcard(require("cors"));

var _dataSource = require("./data-source");

var _config = _interopRequireDefault(require("./configuration/config"));

var _upload = _interopRequireDefault(require("./configuration/upload"));

var _routes = _interopRequireDefault(require("./routes"));

var _AppError = _interopRequireDefault(require("./errors/AppError"));

require("./providers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import { Routes } from "./routes";
// import AppError from "./errors/AppError";
// import auth from "./configuration/auth";
// import auth from "./middleware/auth";
const app = express();
app.use(cors());
app.use(express.json());
app.use('/files', express.static(_upload.default.uploadsFolder));
app.use(_routes.default);
app.use((err, request, response, _) => {
  if (err instanceof _AppError.default) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message
    });
  }

  console.error(err);
  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error'
  });
});
app.listen(_config.default.port, async () => {
  console.log(`API has started on port ${_config.default.port}`);

  try {
    await _dataSource.AppDataSource.initialize();
    console.log('Database connected');
  } catch (error) {
    console.log('Database not connected');
  }
});
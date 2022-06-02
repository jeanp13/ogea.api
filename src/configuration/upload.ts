// import path from 'path';
// import crypto from 'crypto';
import crypto = require('crypto');
import path = require('path');
// import multer, { StorageEngine } from 'multer';

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');

interface IUploadConfig {
  driver: 's3' | 'disk';

  tmpFolder: string;
  uploadsFolder: string;

  // multer: {
  //   storage: StorageEngine;
  // };
  config: {
    disk: {};
    aws: {
      bucket: string;
    };
  };
}

export default {
  driver: process.env.STORAGE_DRIVER,

  tmpFolder,
  uploadsFolder: path.resolve(tmpFolder, 'uploads'),

  // multer: {
  //   storage: multer.diskStorage({
  //     destination: tmpFolder,
  //     filename(request, file, callback) {
  //       const fileHash = crypto.randomBytes(10).toString('hex');
  //       const fileName = `${fileHash}-${file.originalname}`;
  //       const fileNameFinal = fileName.replace(/\s/g, '');
  //       console.log(fileNameFinal);
  //       return callback(null, fileNameFinal);
  //     },
  //   }),
  // },

  config: {
    disk: {},
    aws: {
      bucket: 'app-gobarber-jpavsys',
    },
  },
} as IUploadConfig;
